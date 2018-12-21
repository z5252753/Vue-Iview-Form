export const basicComponents = [
  {
    type: 'i-input',
    label: '单行文本',
    name: 'IInput',
    icon: 'ios-reorder',
    options: {
      width: '100%',
      defaultValue: '',
      required: false,
      dataType: 'string',
      pattern: '',
      placeholder: ''
    }
  },
  {
    type: 'slider',
    label: '范围',
    name: 'Slider',
    icon: 'ios-reorder',
    range: false,
    options: {
      width: '100%',
      defaultValue: [10, 40],
      required: false,
      dataType: 'string',
      pattern: '',
      placeholder: ''
    }
  },
  {
    type: 'radio-group',
    label: '单选框组',
    name: 'radioGroup',
    icon: 'regular/dot-circle',
    options: {
      inline: false,
      defaultValue: '',
      showLabel: false,
      type: 'radio',
      options: [
        {
          value: '选项1',
          label: '选项1'
        },
        {
          value: '选项2',
          label: '选项2'
        },
        {
          value: '选项3',
          label: '选项3'
        }
      ],
      required: false,
      width: '',
      remote: false,
      remoteOptions: [],
      props: {
        value: 'value',
        label: 'label'
      },
      remoteFunc: ''
    }
  }
]

export const advanceComponents = [
  {
    type: 'blank',
    name: '自定义',
    icon: 'chalkboard',
    options: {
      defaultType: 'String'
    }
  },
  {
    type: 'imgupload',
    name: '图片',
    icon: 'regular/image',
    options: {
      defaultValue: [],
      size: {
        width: 100,
        height: 100
      },
      width: '',
      tokenFunc: 'funcGetToken',
      token: '',
      domain: 'http://pfp81ptt6.bkt.clouddn.com/',
      disabled: false,
      length: 8,
      multiple: true
    }
  }
]

export const layoutComponents = [
  {
    type: 'grid',
    name: '栅格布局',
    icon: 'th',
    columns: [
      {
        span: 12,
        list: []
      },
      {
        span: 12,
        list: []
      }
    ],
    options: {
      gutter: 0,
      justify: 'start',
      align: 'top'
    }
  }
]
