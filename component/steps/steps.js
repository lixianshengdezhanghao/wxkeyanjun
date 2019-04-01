// component/steps/steps.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    stepsId:{
      type:Array
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    steps:{
      NumName:[
        '已完成',
        '进行中',
        '未完成',
      ],
      EngName:[
        'finish',
        'process',
        '',
      ]
    }
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
