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

const OrderMode = () => {
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
						<CustomTitle content={'Order Mode'} />
					</Col>
					<Col>
						<span
							style={{
								color: '#027A48',
							}}
						>
							Save 20%
						</span>
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
									<Radio value='delivery'>
										<span>Delivery in 1 hour or less</span>
										<br />
										<span>Please enter your address</span>
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
														message:
															'city is required',
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
												<span>
													Remember this address
												</span>
											</Checkbox>
										</Col>
									</Row>
								</Form>
							</Panel>
						</Collapse>

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
									<Radio value='send_gift'>
										<span>Pickup in 5 minutes</span>
										<br />
										<span>Choose a pickup location</span>
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
												name={'pickup_location'}
												rules={[
													{
														required: true,
														message:
															'Pickup location is required',
													},
												]}
												style={{
													marginBottom: 10,
												}}
											>
												<Row justify={'space-between'} align={'middle'}>
													<label
														className='container'
														htmlFor='location-2'
													>
														<div>
															<div className='main-span'>
																King West
															</div>
															<div>
																410 Adelaide St
																West, Toronto
															</div>
														</div>
													</label>
													<input
														id='location-2'
														type='radio'
														className='input'
														value='King West'
														name='location'
													/>
												</Row>
											</Form.Item>
										</Col>
										<Col xs={24} sm={24} xl={24} lg={24}>
											<Form.Item
												name={'pickup_location'}
												rules={[
													{
														required: true,
														message:
															'Pickup location is required',
													},
												]}
												style={{
													marginBottom: 10,
												}}
											>
												<Row justify={'space-between'} align={'middle'}>
													<label
														className='container'
														htmlFor='location-2'
													>
														<div>
															<div className='main-span'>
																King West
															</div>
															<div>
																410 Adelaide St
																West, Toronto
															</div>
														</div>
													</label>
													<input
														id='location-2'
														type='radio'
														className='input'
														value='King West'
														name='location'
													/>
												</Row>
											</Form.Item>
										</Col>
										<Col xs={24} sm={24} xl={24} lg={24}>
											<Form.Item
												name={'pickup_location'}
												rules={[
													{
														required: true,
														message:
															'Pickup location is required',
													},
												]}
												style={{
													marginBottom: 10,
												}}
											>
												<Row justify={'space-between'} align={'middle'}>
													<label
														className='container'
														htmlFor='location-2'
													>
														<div>
															<div className='main-span'>
																King West
															</div>
															<div>
																410 Adelaide St
																West, Toronto
															</div>
														</div>
													</label>
													<input
														id='location-2'
														type='radio'
														className='input'
														value='King West'
														name='location'
													/>
												</Row>
											</Form.Item>
										</Col>
									</Row>
								</Form>
							</Panel>
						</Collapse>

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
									<Radio value='send_gift'>
										<span>Send as a gift</span>
										<br />
										<span>
											Please enter a delivery address
										</span>
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
														message:
															'city is required',
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
												<span>
													Remember this address
												</span>
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
}

export default OrderMode;
