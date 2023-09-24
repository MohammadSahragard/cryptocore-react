import { useState, useEffect, useRef } from "react";
import Chart from "react-apexcharts";

// api
import { getChartData, getOHLCData } from "../../services/api";

// components
import PrimaryButton from '../ui/PrimaryButton';





const CoinChart = ({ data, coinId, selectedCurrency, helper }) => {

  const {market_data} = data;
  const chartRef = useRef ();

  // ----- states
  const [coinChartData, setCoinChartData] = useState ({});
  const [OHLCData, setOHLCData] = useState ({});
  const [timeFrame, setTimeFrame] = useState('one_day');
  const [dataSeries, setDataSeries] = useState ('price');
  const [chartType, setChartType] = useState ('line');


  const timeFramePercentage = timeFrame !== 'max' ? market_data?.[helper.getPercentageTimeFrame (timeFrame)][selectedCurrency?.code?.toLowerCase ()] : 1;



  // const and variables
  const lengthForDate = coinChartData?.prices?.length;
  


  useEffect (() => {
    // fetch data from API
    const fetchChartData = async () => {
      setCoinChartData ((await getChartData (coinId, selectedCurrency?.code, helper.getTimeFrame (timeFrame))));
      setOHLCData ((await getOHLCData (coinId, selectedCurrency?.code, helper.getTimeFrame (timeFrame))));
    };

    fetchChartData ();


    // update chart options
    if (chartRef) {
      chartRef.current.chart.ctx.updateOptions({
        ...options,

        yaxis: {
          ...options.yaxis,
          labels: {
            ...options.yaxis.labels,
            formatter: (value) => setFormatter (value),
          }
        },
        tooltip: {
          y: {
            formatter: (value) => setFormatter (value),
          }
        }
      });
    };
  }, [selectedCurrency, timeFrame, coinId]);



  // chart series
  const series = [
      {
        name: chartType === 'line' ?
                (dataSeries === 'price' ?
                'Price' : dataSeries === 'market_caps' ?
                'Market Caps' : 'Vol') :
              '',

        type: chartType === 'line' ? (dataSeries === 'price' || dataSeries === 'market_caps' ? 'area' : 'bar') : 'candlestick',

        data: coinChartData?.prices ? 
                (chartType === 'line' ?
                  (dataSeries === 'price' ?
                  coinChartData?.prices : 
                  dataSeries === 'market_caps' ? 
                  coinChartData?.market_caps : 
                  coinChartData?.total_volumes) :
                OHLCData) :
              [],
    }
  ];




  const setFormatter = value  => `${selectedCurrency?selectedCurrency.symbol:'$'} ${helper.separatorThousandsCurrency(value)}`;


  // chart options
  const options = {
    chart: {
      id: 'area-dateTime',
      foreColor: '#64748b',
      type: chartType === 'line' ? 'line' : 'candlestick',
      selection: {
        enabled: true,
        type: 'x',
        fill: {
          color: '#8000FF',
          opacity: 0.2
        }
      },
      toolbar: {
        offsetX: -15,
        tools: {
          download: '<i class="fa fa-download fa-lg"></i>',
          zoomin: '<i class="fa fa-circle-plus fa-lg"></i>',
          zoomout: '<i class="fa fa-circle-minus fa-lg"></i>',
          zoom: `<i class="fa fa-magnifying-glass-plus fa-lg ${document.querySelector('.apexcharts-zoom-icon')?.className.includes('selected') && 'text-blue-600'}"></i>`,
          pan: `<i class="fa fa-hand fa-lg  ${document.querySelector('.apexcharts-pan-icon')?.className.includes('selected') && 'text-blue-600'}"></i>`,
          selection: `<i class="fa fa-square-dashed fa-lg ${document.querySelector('.apexcharts-selection-icon')?.className.includes('selected') && 'text-blue-600'}"></i>`,
          reset: '<i class="fa fa-compress fa-lg"></i>'
        }
      },
      zoom: {
        autoScaleYaxis: true
      }
    },
    fill: {
      type: ['gradient'],
      colors: [`${dataSeries !== 'total_volumes' ? (timeFramePercentage < 0 ? 'red' : '#22c55e') : '#8000FF'}`],
      gradient: {
        type: 'vertical',
        shade: 'dark',
        shadeIntensity: 0.2,
        opacityFrom: 0.6,
        opacityTo: 0,
        stops: [0, 100],
      }
    },
    stroke: {
      lineCap: 'butt',
      colors: [`${dataSeries !== 'total_volumes' ? (timeFramePercentage < 0 ? 'red' : '#22c55e') : '#8000FF'}`],
      width: 2,
      dashArray: 0,
    },
    markers: {
      colors: `${dataSeries !== 'total_volumes' ? (timeFramePercentage < 0 ? 'red' : '#22c55e') : '#8000FF'}`,
      strokeColor: `${dataSeries !== 'total_volumes' ? (timeFramePercentage < 0 ? '#ff000050' : '#22c55e50') : '#8000FF'}`,
      strokeOpacity: 0.6,
      strokeWidth: 12,
      size: 0,
      style: 'hollow',
      hover: {
        size: 4,
      }
    },
    grid: {
      borderColor: '#33415580'
    },
    dataLabels: {
      enabled: false
    },
    xaxis: {
      type: 'datetime',
      labels: {
        offsetY: -5
      },
      tooltip: {
        enabled: false
      }
    },
    yaxis: {
      tickAmount: 8,
      showForNullSeries: false,
      floating: true,
      labels: {
        align: 'left',
        offsetY: -5,
        formatter: (value) => setFormatter (value),
      }
    },
    tooltip: {
      theme: 'dark',
      x: {
          show: true,
          format: 'ddd, dd MMM yyyy , hh:mm'
      },
      marker: {
          show: false,
      }
    },
    noData: {
      text: 'Loading ...',
      align: 'center',
      verticalAlign: 'top',
      offsetX: 0,
      offsetY: 0,
      style: {
        color: ['lightblue'],
        fontSize: '24px'
      }
    }
  };



  // functions (set time frame)
  const updateData = (timeFrame) => {
    setTimeFrame(timeFrame)

    switch (timeFrame) {
      case 'one_day':
        ApexCharts.exec(
          'area-dateTime',
          'zoomX',
          new Date(coinChartData?.prices?.[lengthForDate - 1][0]),
          new Date(coinChartData?.prices?.[0][0])
        )
        break
      case 'one_week':
        ApexCharts.exec(
          'area-dateTime',
          'zoomX',
          new Date(coinChartData?.prices?.[lengthForDate - 1][0]),
          new Date(coinChartData?.prices?.[0][0])
        )
        break
      case 'two_week':
        ApexCharts.exec(
          'area-dateTime',
          'zoomX',
          new Date(coinChartData?.prices?.[lengthForDate - 1][0]),
          new Date(coinChartData?.prices?.[0][0])
        )
        break
      case 'one_month':
        ApexCharts.exec(
          'area-dateTime',
          'zoomX',
          new Date(coinChartData?.prices?.[lengthForDate - 1][0]),
          new Date(coinChartData?.prices?.[0][0])
        )
        break
      case 'twoH_days':
        ApexCharts.exec(
          'area-dateTime',
          'zoomX',
          new Date(coinChartData?.prices?.[lengthForDate - 1][0]),
          new Date(coinChartData?.prices?.[0][0])
        )
        break
      case 'max':
        ApexCharts.exec(
          'area-dateTime',
          'zoomX',
          new Date(coinChartData?.prices?.[lengthForDate - 1][0]),
          new Date(coinChartData?.prices?.[0][0])
        )
        break
      default:
    }
  }



  return (


    <div id="chart">
      <div className="toolbar flex justify-between">


        {/* data series */}
        <div className="flex divide-x rounded-md overflow-hidden scale-[0.78] origin-left">

          <PrimaryButton
            customClassName='origin-left rounded-none'
            isActive={dataSeries === 'price' ? true : false}
            id="price"
            clickHandler={() => setDataSeries('price')}>
            Price
          </PrimaryButton>

          <PrimaryButton
            customAttr={{'disabled': chartType === 'candlestick' ? true : false}}
            customClassName='origin-left rounded-none text-orange truncate'
            isActive={dataSeries === 'market_caps' ? true : false}
            id="market_caps"
            clickHandler={() => setDataSeries('market_caps')}>
            Market Cap
          </PrimaryButton>

          <PrimaryButton
            customAttr={{'disabled': chartType === 'candlestick' ? true : false}}
            customClassName='origin-left rounded-none'
            isActive={dataSeries === 'total_volumes' ? true : false}
            id="total_volumes"
            clickHandler={() => setDataSeries('total_volumes')}>
            Volumes
          </PrimaryButton>

        </div>


        {/* chart type */}
        <div className="flex divide-x rounded-md overflow-hidden scale-[0.78] origin-center">

          <PrimaryButton
            customClassName='origin-left rounded-none py-0'
            isActive={chartType === 'line' ? true : false}
            id="line"
            clickHandler={() => setChartType('line')}>
            <i className='fal fa-chart-line fa-lg'></i>
          </PrimaryButton>

          <PrimaryButton
            customAttr={{'disabled': dataSeries === 'total_volumes' || dataSeries === 'market_caps' ? true : false}}
            customClassName='origin-left rounded-none py-0'
            isActive={chartType === 'candlestick' ? true : false}
            id="candlestick"
            clickHandler={() => setChartType('candlestick')}>
            <i className='fal fa-chart-candlestick fa-lg'></i>
          </PrimaryButton>

        </div>


        {/* chart time frame */}
        <div className='flex divide-x rounded-md overflow-hidden scale-[0.78] origin-right'>

          <PrimaryButton
            customClassName='origin-right rounded-none'
            isActive={timeFrame === 'one_day' ? true : false}
            id="one_day"
            clickHandler={() => updateData('one_day')}>
            24h
          </PrimaryButton>
          
          <PrimaryButton
            customClassName='origin-right rounded-none'
            isActive={timeFrame === 'one_week' ? true : false}
            id="one_week"
            clickHandler={() => updateData('one_week')}>
            7d
          </PrimaryButton>
          
          <PrimaryButton
            customClassName='origin-right rounded-none'
            isActive={timeFrame === 'two_week' ? true : false}
            id="two_week"
            clickHandler={() => updateData('two_week')}>
            14d
          </PrimaryButton>
          
          <PrimaryButton
            customClassName='origin-right rounded-none'
            isActive={timeFrame === 'one_month' ? true : false}
            id="one_month"
            clickHandler={() => updateData('one_month')}>
            30d
          </PrimaryButton>
          
          <PrimaryButton
            customClassName='origin-right rounded-none'
            isActive={timeFrame === 'twoH_days' ? true : false}
            id="twoH_days"
            clickHandler={() => updateData('twoH_days')}>
            200d
          </PrimaryButton>
          
          <PrimaryButton
            customClassName='origin-right rounded-none'
            isActive={timeFrame === 'max' ? true : false}
            id="max"
            clickHandler={() => updateData('max')}>
            max
          </PrimaryButton>

        </div>
      </div>

      <div id="chart-timeline">
        <Chart
          options={options}
          series={series}
          types={chartType === 'line' ? 'line' : 'candlestick'}
          ref={chartRef} />
      </div>
    </div>
  )
}


export default CoinChart;