import React from 'react';
import './billing-address.css';
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

const BillingAddress = () => {
	const [form] = Form.useForm();
	return (
		<div
			style={{
				marginBottom: 50,
			}}
		>
			<div
				// className='hide-on-mobile'
				style={{
					margin: 30,
				}}
			></div>

			<Row justify={'space-between'} align={'middle'}>
				<Col>
					<CustomTitle content={'Billing address'} />
				</Col>
			</Row>

			<Row>
				<Col span={24}>
					<div
						className='billings_same'
						style={{
							marginBottom: 10,
						}}
					>
						<Radio value='billings'>
							<span>Use the same as shipping address</span>
						</Radio>
					</div>

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
								<Radio value='billings'>
									<span>Add a new billing address</span>
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
									<Col xs={24} sm={24} xl={12} lg={12}>
										<Form.Item
											label={'First Name'}
											name={'first_name'}
											rules={[
												{
													required: true,
													message:
														'First Name is required',
												},
											]}
											style={{
												marginBottom: 10,
											}}
										>
											<Input
												size={'large'}
												placeholder='First Name'
											/>
										</Form.Item>
									</Col>

									<Col xs={24} sm={24} xl={12} lg={12}>
										<Form.Item
											label={'Last Name'}
											name={'last_name'}
											// validateStatus={isUserEdit && !userData?.lastName ? 'error' : false}
											// help={isUserEdit && !userData?.lastName ? 'Last Name is required' : null}
											rules={[
												{
													required: true,
													message:
														'Last Name is required',
												},
											]}
											style={{
												marginBottom: 10,
											}}
										>
											<Input
												size={'large'}
												placeholder='Last Name'
											/>
										</Form.Item>
									</Col>

									<Col xs={24} sm={24} xl={12} lg={12}>
										<Form.Item
											label={'Email'}
											name={'email'}
											rules={[
												{
													required: true,
													message:
														'Email is required',
												},
												{
													type: 'email',
													message:
														'Please enter a valid E-mail!',
												},
											]}
											style={{
												marginBottom: 10,
											}}
										>
											<Input
												size={'large'}
												placeholder='Email'
											/>
										</Form.Item>
									</Col>

									<Col xs={24} sm={24} xl={12} lg={12}>
										<Form.Item
											label={'Phone Number'}
											name={'phone'}
											rules={[
												{
													required: true,
													message:
														'Phone is required',
												},
												{
													pattern: new RegExp(
														/^\s*(?:\+?(\d{1,3}))?\s?\(?(\d{3})\)?[-\.\s]?(\d{3})[-\.\s]?(\d{4})/
													),
													message:
														'Please enter valid phone number',
												},
											]}
											style={{
												marginBottom: 10,
											}}
										>
											<Input
												size={'large'}
												placeholder='Phone'
											/>
										</Form.Item>
									</Col>

									<Col xs={24} sm={24} xl={24} lg={24}>
										<Form.Item
											label={'Address'}
											name={'Address'}
											rules={[
												{
													required: true,
													message:
														'address is required',
												},
												{
													message:
														'Please enter valid your address',
												},
											]}
											style={{
												marginBottom: 10,
											}}
										>
											<Input
												size={'large'}
												placeholder='Address 1'
												style={{
													marginBottom: 10,
												}}
											/>
											<Input
												size={'large'}
												placeholder='Address 2'
												style={{
													marginBottom: 10,
												}}
											/>
										</Form.Item>
									</Col>

									<Col xs={24} sm={24} xl={12} lg={12}>
										<Form.Item
											label={'Province'}
											name={'province'}
											rules={[
												{
													required: true,
													message:
														'Province is required',
												},
											]}
											style={{
												marginBottom: 10,
											}}
										>
											<Select defaultValue='Province'>
												<Option value='Province'>
													Province
												</Option>
											</Select>
										</Form.Item>
									</Col>
									<Col xs={24} sm={24} xl={12} lg={12}>
										<Form.Item
											label={'City'}
											name={'city'}
											rules={[
												{
													required: true,
													message: 'city is required',
												},
											]}
											style={{
												marginBottom: 10,
											}}
										>
											<Input
												size={'large'}
												placeholder='City'
											/>
										</Form.Item>
									</Col>

									<Col xs={24} sm={24} xl={24} lg={24}>
										<Form.Item
											label={'Postal Code'}
											name={'postal_code'}
											rules={[
												{
													required: true,
													message:
														'Postal Code is required',
												},
												{
													message:
														'Please enter valid Postal Code',
												},
											]}
											style={{
												marginBottom: 10,
											}}
										>
											<Input
												size={'large'}
												placeholder='Postal Code'
												style={{
													marginBottom: 10,
												}}
											/>
										</Form.Item>
									</Col>

									<Col>
										<Checkbox>
											<span>Remember this address</span>
										</Checkbox>
									</Col>
								</Row>
							</Form>
						</Panel>
					</Collapse>
				</Col>
			</Row>
		</div>
	);
};

export default BillingAddress;
