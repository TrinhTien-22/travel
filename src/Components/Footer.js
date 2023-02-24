
import React from 'react'
import { useState } from 'react';
import "./Footer.css"
import {
    Button,
    Cascader,
    DatePicker,
    Form,
    Input,
    InputNumber,
    Radio,
    Select,
    Switch,
    TreeSelect,
  } from 'antd';
import './Footer.css'

function Footer() {
  const [componentSize, setComponentSize] = useState('default');
  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };
  const [name, setName] = useState()
  const [std , setStd] = useState()

  const handleChangename = (e) => {
    setName(e.target.value)
  }
  const handleChangeSdt = (e) => {
    setStd(e.target.value)
  }
  const handleSubmit = () => {
    setName("")
    setStd("")
  }

  return (
    <div className='footer-container'>
       <section className='footer-subscription'>
         <p className='footer-subscription-heading'>
           Đăng kí với chúng tôi
         </p>
         <p className='footer-subscription-text'>
            
         </p>
         <div className='input-areas'>
         <Form
         labelCol={{
           span: 4,
         }}
         wrapperCol={{
           span: 14,
         }}
         layout="horizontal"
         initialValues={{
           size: componentSize
         }}
         onValuesChange={onFormLayoutChange}
         size={componentSize}
         style={{
           maxWidth: 600,
         }}
       >
         <Form.Item label="Form Size" name="size">
           <Radio.Group>
             <Radio.Button value="small">Small</Radio.Button>
             <Radio.Button value="default">Default</Radio.Button>
             <Radio.Button value="large">Large</Radio.Button>
           </Radio.Group>
         </Form.Item>
         <Form.Item label="Họ Tên">
           <Input value={name} onChange={handleChangename }/>
         </Form.Item>
         <Form.Item label="Số điện thoại">
           <Input value={std} onChange={handleChangeSdt} />
         </Form.Item>
         <Form.Item label="Điểm đến">
           <Select >
             <Select.Option >Hà Giang</Select.Option>
           </Select>
         </Form.Item>
         <Form.Item label="Tour">
           <TreeSelect 
             treeData={[
               {
                 title: '3day',
                 value: '3day',
                 children: [
                   {
                     title: 'combo3',
                     value: 'combo3',
                   },
                 ],
               },
               {
                title: '6day',
                value: '6day',
                children: [
                  {
                    title: 'combo6',
                    value: 'combo6',
                  },
                ],
              },
             ]}
           />
         </Form.Item>
         <Form.Item label="Quê quán">
           <Cascader
             options={[
               {
                 value: 'Hà Nội',
                 label: 'Hà Nội',
                 children: [
                   {
                     value: 'Hà Đông',
                     label: 'Hà Đông',
                     children: [
                      {
                        value: 'Thanh Xuân',
                        label: 'Thanh Xuân',
                      },]
                   },
                   
                 ],
               },
               {
                value: 'Hưng Yên',
                label: 'Hưng Yên',
                children: [
                  {
                    value: 'Như Quỳnh',
                    label: 'Như Quỳnh',
                    children: [
                     {
                       value: 'Văn Lâm',
                       label: 'Văn Lâm',
                     },]
                  },
                  
                ],
              },
             ]}
           />
         </Form.Item>
         <Form.Item label="Đặt lịch">
           <DatePicker />
         </Form.Item>
         <Form.Item label="Số người">
           <InputNumber />
         </Form.Item>
         <Form.Item label="Đặt cọc" valuePropName="checked">
           <Switch />
         </Form.Item>
         <Form.Item label="Đăng kí">
           <Button onClick={handleSubmit}>Đăng kí</Button>
         </Form.Item>
       </Form>
         </div>
       </section>

    </div>
  )
}

export default Footer