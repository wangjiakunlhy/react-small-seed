import React, { Component } from 'react';
import { Input, Button, Form, Radio, DatePicker, Col, Row, Upload, Icon } from 'antd';

const FormItem = Form.Item;
const RadioGroup = Radio.Group;

import '../style/index.less'
import PropTypes from "prop-types";


class CompanyDetail extends Component{

    componentWillMount(){
        console.log(this.props);
    }

    save = () => {
        this.props.form.validateFieldsAndScroll((err,values) => {
            if(!err){
                console.log(values);
            }
        })
    }

    close = () => {
        this.context.router.history.goBack();
    }

    uploadChange = (file) => {
        console.log(file);
    }

    isRemoveAttachFile = () => {
        console.log('删除附件');
    }

    render(){
        const { getFieldDecorator } = this.props.form;

        const formItemLayout = {
            labelCol: {span: 6, offset:0},
            wrapperCol: {span: 6}
        };
        return (
            <div className='layout-public'>
                <Row style={{margin:'16px 0'}}>
                    <Col span={6}>
                        <Button type='primary' onClick={this.save}>保存</Button>
                    </Col>
                    <Col span={6}>
                        <Button onClick={this.close}>关闭</Button>
                    </Col>
                    <Col span={6}/>
                    <Col span={6}/>
                </Row>
                <Form>
                    <Row>
                        <Col span={6}>
                            是否完成:
                        </Col>
                        <Col span={6}>
                            <FormItem>
                                {
                                    getFieldDecorator('isFinish',{
                                        initialValue:null,
                                        rules:[{
                                            required:true,
                                            message:'必填'
                                        }]
                                    })(
                                        <RadioGroup>
                                            <Radio value={1}>是</Radio>
                                            <Radio value={0}>否</Radio>
                                        </RadioGroup>
                                    )
                                }
                            </FormItem>
                        </Col>
                        <Col span={6}>
                            移交日期:
                        </Col>
                        <Col span={6}>
                            <FormItem>
                                {
                                    getFieldDecorator('date0',{
                                        initialValue:null,
                                        rules:[{
                                            required:true,
                                            message:'必填'
                                        }]
                                    })(
                                        <DatePicker/>
                                    )
                                }
                            </FormItem>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={6}>
                            租户条件图发送日期:
                        </Col>
                        <Col span={6}>
                            <FormItem>
                                {
                                    getFieldDecorator('date1',{
                                        initialValue:null,
                                        rules:[{
                                            required:true,
                                            message:'必填'
                                        }]
                                    })(
                                        <DatePicker/>
                                    )
                                }
                            </FormItem>
                        </Col>
                        <Col span={6}>
                            店铺工程条件计划完成日期:
                        </Col>
                        <Col span={6}>
                            <FormItem>
                                {
                                    getFieldDecorator('date2',{
                                        initialValue:null,
                                        rules:[{
                                            required:true,
                                            message:'必填'
                                        }]
                                    })(
                                        <DatePicker/>
                                    )
                                }
                            </FormItem>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={6}>
                            合同特殊条款:
                        </Col>
                        <Col span={18}>
                            <span style={{color:'red'}}>是啥打款空手道可是历史上看对方是福建省看风景了斯柯达接口了的讲解</span>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={6}/>
                        <Col span={18}>
                            <FormItem>
                                {
                                    getFieldDecorator('date1',{
                                        initialValue:null,
                                        rules:[{
                                            required:true,
                                            message:'必填'
                                        }]
                                    })(
                                        <Input.TextArea/>
                                    )
                                }
                            </FormItem>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={6}>
                            上传附件:
                        </Col>
                        <Col span={6}>
                            <FormItem>
                                <Upload
                                    action="http://www.baidu.com"
                                    headers={{
                                        Authorization: `Bearer aadsjdj4jskdkj4ksd`,
                                    }}
                                    onChange={this.uploadChange}
                                    onRemove={this.isRemoveAttachFile}
                                >
                                    <Button>
                                        <Icon type="upload" />
                                         上传文件
                                    </Button>
                                </Upload>
                            </FormItem>
                        </Col>
                        <Col span={12}/>
                    </Row>
                </Form>
            </div>
        )
    }
}

CompanyDetail.contextTypes = {
    router: PropTypes.object
};

export default Form.create()(CompanyDetail);