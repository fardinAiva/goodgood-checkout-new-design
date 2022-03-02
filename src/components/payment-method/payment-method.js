import React from 'react';
import {
	Anchor,
	Button,
	Col,
	Collapse,
	Form,
	Input,
	Layout,
	Radio,
	Row,
	Space,
	Typography,
	Select,
	Checkbox,
} from 'antd';
import CustomTitle from '../custom-title/customTitle';
const { Panel } = Collapse;
const { Option } = Select;

const PaymentMethod = () => {
	const [form] = Form.useForm();
	return (
		<>
			<div
				// className='hide-on-mobile'
				style={{
					margin: 30,
				}}
			></div>

			<Row justify={'space-between'} align={'middle'}>
				<Col>
					<CustomTitle content={'Payment method'} />
				</Col>
			</Row>

			<Row>
				<Col span={24}>
					<Collapse
						expandIconPosition='right'
						style={{
							marginBottom: 5,
						}}
						expandIcon={(panelProps) => (
							<svg
								width='20'
								height='20'
								viewBox='0 0 20 20'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'
							>
								<path
									d={
										panelProps.isActive
											? 'M15 12.5L10 7.5L5 12.5'
											: 'M5 7.5L10 12.5L15 7.5'
									}
									stroke='#344054'
									strokeWidth='2'
									strokeLinecap='round'
									strokeLinejoin='round'
								/>
							</svg>
						)}
					>
						<Panel
							header={
								<Radio value='payment'>
									<span>Add payment method</span>
								</Radio>
							}
							key='1'
						>
							<Form
								// layout={'inline'}
								form={form}
								layout='vertical'
								style={{ marginTop: 15 }}
								onFinish={(e) => {
									console.log(
										'================e===================='
									);
									console.log(e);
									console.log(
										'================e===================='
									);
								}}
								requiredMark={'optional'}
							>
								<Row gutter={12}>
									<Col xs={24} sm={24} xl={24} lg={24}>
										<Form.Item
											label={'Credit card number'}
											name={'credit_card_number'}
											rules={[
												{
													required: true,
													message:
														'Credit Card Number is required',
												},
												{
													message:
														'Please enter valid card Number',
												},
											]}
											style={{
												marginBottom: 10,
											}}
										>
											<Input
												size={'large'}
												placeholder='Credit card'
												style={{
													marginBottom: 10,
												}}
											/>
										</Form.Item>
									</Col>

									<Col xs={24} sm={24} xl={24} lg={24}>
										<Form.Item
											label={'Name on card'}
											name={'name_on_card'}
											rules={[
												{
													required: true,
													message:
														'Name on Card is required',
												},
												{
													message:
														'Please enter valid Name',
												},
											]}
											style={{
												marginBottom: 10,
											}}
										>
											<Input
												size={'large'}
												placeholder='Name on card'
												style={{
													marginBottom: 10,
												}}
											/>
										</Form.Item>
									</Col>

									<Col xs={24} sm={24} xl={12} lg={12}>
										<Form.Item
											label={'Expiration date'}
											name={'expiration_date'}
											rules={[
												{
													required: true,
													message:
														'Expiration date is required',
												},
											]}
											style={{
												marginBottom: 10,
											}}
										>
											<Input
												size={'large'}
												placeholder='Expiration date'
											/>
										</Form.Item>
									</Col>

									<Col xs={24} sm={24} xl={12} lg={12}>
										<Form.Item
											label={'Security code'}
											name={'security_code'}
											// validateStatus={isUserEdit && !userData?.lastName ? 'error' : false}
											// help={isUserEdit && !userData?.lastName ? 'Last Name is required' : null}
											rules={[
												{
													required: true,
													message:
														'Security code is required',
												},
											]}
											style={{
												marginBottom: 10,
											}}
										>
											<Input
												size={'large'}
												placeholder='Security code'
											/>
										</Form.Item>
									</Col>

									<Col xs={24} sm={24} xl={24} lg={24}>
										<Form.Item
											label={'Postal code'}
											name={'postal_code'}
											rules={[
												{
													required: true,
													message:
														'Postal code is required',
												},
												{
													message:
														'Please enter valid Postal code',
												},
											]}
											style={{
												marginBottom: 10,
											}}
										>
											<Input
												size={'large'}
												placeholder='Postal code'
												style={{
													marginBottom: 10,
												}}
											/>
										</Form.Item>
									</Col>

									<Col>
										<Checkbox>
                                            <Space size="large">
                                                <span>Remember this address</span>
												<span
													style={{ color: '#F04438' }}
												>
													Cancel
                                                </span>
                                            </Space>
										</Checkbox>
									</Col>
								</Row>
							</Form>
						</Panel>
					</Collapse>
				</Col>
			</Row>
		</>
	);
};

export default PaymentMethod;
