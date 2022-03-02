import logo from './logo.svg';
import './App.css';

import Navbar from './components/navbar/navbar';
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
import Warning from './components/warning/warning';
import TextArea from 'antd/lib/input/TextArea';
import CustomTitle from './components/custom-title/customTitle';
import CollapseIcon from './assets/icons/CollapseIcon';
import SummaryItem from './components/summary-item/summaryItem';
import CartSection from './components/cart-section/cartSection';
import OrderMode from './components/order-mode/order-mode';
import PaymentMethod from './components/payment-method/payment-method';
import BillingAddress from './components/billing-address/billing-address';

const { Content } = Layout;

const { Title } = Typography;
const { Panel } = Collapse;
const { Option } = Select;
function App() {
	const [form] = Form.useForm();

	return (
		<>
			<Navbar />

			<Content className='light'>
				<Row>
					<Col
						xs={24}
						sm={24}
						md={24}
						lg={24}
						xl={24}
						className='alert-section'
					>
						<Title level={2} className='checkout-label'>
							Checkout
						</Title>
						<Warning />
						<Row className='login-label'>
							<Col span={24}>
								<label
									style={{
										fontWeight: 400,
										fontSize: 16,
										color: '#667085',
									}}
								>
									Already have an account?{' '}
								</label>
								<label
									style={{
										fontWeight: 400,
										fontSize: 16,
										color: '#027A48',
									}}
								>
									Log in
								</label>
							</Col>
						</Row>
					</Col>
					<Col
						xs={24}
						sm={24}
						md={24}
						lg={12}
						xl={12}
						className='details'
					>
						{/* <Details /> */}

						{/* user details  */}

						<Row align={'middle'} justify='space-between'>
							<Col md={24} lg={24}>
								<CustomTitle content={'Contact information'} />

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
												style={{ marginBottom: 10 }}
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
												style={{ marginBottom: 10 }}
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
												style={{ marginBottom: 10 }}
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
												style={{ marginBottom: 10 }}
											>
												<Input
													size={'large'}
													placeholder='Phone'
												/>
											</Form.Item>
										</Col>
									</Row>
								</Form>
							</Col>

							<div
								className='hide-on-mobile'
								style={{
									margin: 30,
								}}
							></div>

							<Col xs={24} sm={24} xl={24} lg={24}>
								<Form
									// layout={'inline'}
									form={form}
									layout='vertical'
									onFinish={(e) => {
										console.log(
											'================e===================='
										);
										console.log(e);
										console.log(
											'================e===================='
										);
									}}
									id={'textarea-form'}
								>
									<Form.Item
										label={'Delivery / pick up notes'}
										name={'email'}
										style={{ marginBottom: 10 }}
									>
										<TextArea
											autoSize={{
												minRows: 4,
												maxRows: 4,
											}}
											placeholder='Please let us know if there’s anything we can do to make your order special :)'
										/>
									</Form.Item>
								</Form>
							</Col>
						</Row>
						{/* user details  */}

						{/* order mode */}

            <OrderMode />
            <PaymentMethod />
            <BillingAddress />

						{/* order mode */}
					</Col>

					<Col
						xs={24}
						sm={24}
						md={24}
						lg={12}
						xl={12}
						className='summary'
					>
						<div>
							{/* <Summary /> */}

							{/* order summary */}
							<Row
								justify={'space-between'}
								align={'middle'}
								style={{
									marginBottom: 20,
								}}
							>
								<Col>
									<CustomTitle content={'Order Summary'} />
								</Col>
								<Col>
									<svg
										width='20'
										height='20'
										viewBox='0 0 20 20'
										fill='none'
										xmlns='http://www.w3.org/2000/svg'
									>
										<path
											d='M5 7.5L10 12.5L15 7.5'
											stroke='#344054'
											strokeWidth='2'
											strokeLinecap='round'
											strokeLinejoin='round'
										/>
									</svg>
								</Col>
							</Row>

							<SummaryItem
								textLeft={'Subtotal'}
								textRight={'$2.50'}
							/>
							<SummaryItem textLeft={'Tax'} textRight={'$0.50'} />
							<SummaryItem
								textLeft={'Delivery fee'}
								textRight={'$0.00'}
							/>
							<SummaryItem textLeft={'Tip'} textRight={'$2.00'} />

							<Radio.Group
								options={[
									{
										label: '10%',
										value: '10%',
									},
									{
										label: '15%',
										value: '15%',
									},
									{
										label: '18%',
										value: '18%',
									},
								]}
								optionType='button'
								style={{
									display: 'flex',
									justifyContent: 'center',
									margin: '10px 0',
								}}
							/>

							<div
								style={{
									padding: '0 10px',
									marginBottom: 10,
								}}
							>
								<Input
									type={'number'}
									min={1}
									size='large'
									placeholder='Custom tip'
									className='tip-input'
								/>
							</div>

							<Form form={form} layout={'vertical'}>
								<Form.Item
									label={'Discount Code'}
									name={'discount_code'}
									style={{
										marginBottom: 0,
									}}
								>
									<Input
										size={'large'}
										placeholder='Discount Code'
									/>
								</Form.Item>
							</Form>

							<div className='hide-on-mobile'>
								<SummaryItem
									textLeft={'Total'}
									textRight={'$3.38'}
									isBold={true}
								/>

								<Button
									size={'large'}
									block
									disabled
									className='checkout-btn'
								>
									Checkout
								</Button>
							</div>

							<div
								className='mobile-sticky-div hide-on-lg'
								style={{ paddingTop: 0 }}
							>
								<SummaryItem
									textLeft={'Total'}
									textRight={'$3.38'}
									isBold={true}
								/>

								<Button
									size={'large'}
									block
									disabled
									className='checkout-btn'
								>
									Checkout
								</Button>
							</div>

							{/* order summary */}

							{/* your cart */}

							<CartSection />

							{/* your cart */}
						</div>
					</Col>
				</Row>
			</Content>
		</>
	);
}

export default App;
