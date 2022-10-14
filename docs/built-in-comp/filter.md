---
title: Filter 组件
sidebar_position: 1
---

查询组件

## 引入组件

```js
import Filter from 'component/Filter';
```

## 配置项

### * fieldsConfig

`type: FieldsConfig[]`

筛选字段配置项。

```ts
interface FieldsConfig {
  label: string;
  component: FormItemsKeys;
  fields: string;
  componentProps?: ComPropsType[FormItemsKeys];
  defaultValue?: any;
}
```

### * onSubmit

`type: (fieldsValue: FormData) => void;`

触发查询事件。

### children

`type: ((form: FormInstance) => ReactNode) | ReactNode`

Filter子元素。