import { useEffect, useState } from "react";
import "./AuthPages.css";

function Register({ onNavigate }) {
	const [formData, setFormData] = useState({
		firstName: "",
		lastName: "",
		email: "",
		password: "",
		confirmPassword: "",
		userType: "student",
		agreeToTerms: false,
	});
	const [showPassword, setShowPassword] = useState(false);
	const [showConfirmPassword, setShowConfirmPassword] = useState(false);
	const [isLoading, setIsLoading] = useState(false);
	const [passwordMatch, setPasswordMatch] = useState(true);
	const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

	useEffect(() => {
		const handleResize = () => {
			setIsMobile(window.innerWidth < 768);
		};
		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	const handleChange = (e) => {
		const { name, value, type, checked } = e.target;
		setFormData((prev) => ({
			...prev,
			[name]: type === "checkbox" ? checked : value,
		}));

		if (name === "confirmPassword" || name === "password") {
			setPasswordMatch(
				name === "confirmPassword"
					? value === formData.password
					: formData.confirmPassword === value,
			);
		}
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (!passwordMatch) {
			alert("Passwords do not match!");
			return;
		}
		setIsLoading(true);
		setTimeout(() => {
			setIsLoading(false);
			console.log(formData);
			alert("Account created! (Demo)");
		}, 1500);
	};

	return (
		<div
			style={{
				minHeight: "100vh",
				background:
					"linear-gradient(160deg, #0f172a 0%, #1e3a8a 45%, #1e293b 100%)",
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
				padding: isMobile ? "20px 16px" : "40px 20px",
				position: "relative",
				overflow: "hidden",
				fontFamily: "'DM Sans', 'Segoe UI', sans-serif",
			}}
		>
			{/* Background Elements */}
			<div
				style={{
					position: "absolute",
					inset: 0,
					backgroundImage:
						"linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
					backgroundSize: "60px 60px",
					pointerEvents: "none",
				}}
			/>
			<div
				style={{
					position: "absolute",
					top: "-10%",
					right: "-5%",
					width: isMobile ? 300 : 450,
					height: isMobile ? 300 : 450,
					background:
						"radial-gradient(circle, rgba(30,64,175,0.25) 0%, transparent 70%)",
					borderRadius: "50%",
					pointerEvents: "none",
				}}
			/>
			<div
				style={{
					position: "absolute",
					bottom: "-5%",
					left: "-15%",
					width: isMobile ? 250 : 400,
					height: isMobile ? 250 : 400,
					background:
						"radial-gradient(circle, rgba(8,145,178,0.15) 0%, transparent 70%)",
					borderRadius: "50%",
					pointerEvents: "none",
				}}
			/>

			{/* Main Container */}
			<div
				style={{
					position: "relative",
					zIndex: 10,
					width: "100%",
					maxWidth: 500,
				}}
			>
				{/* Header */}
				<div style={{ textAlign: "center", marginBottom: isMobile ? 24 : 36 }}>
					<div
						style={{
							display: "inline-flex",
							alignItems: "center",
							justifyContent: "center",
							gap: 8,
							marginBottom: 16,
							cursor: "pointer",
						}}
						onClick={() => onNavigate("home")}
					>
						<div
							style={{
								width: 40,
								height: 40,
								background: "linear-gradient(135deg, #1e40af, #1d4ed8)",
								borderRadius: 10,
								display: "flex",
								alignItems: "center",
								justifyContent: "center",
								fontSize: 20,
							}}
						>
							🎓
						</div>
						<span
							style={{
								fontWeight: 700,
								fontSize: isMobile ? 18 : 20,
								color: "#fff",
							}}
						>
							Scholarship<span style={{ color: "#3b82f6" }}>Hunt</span>
						</span>
					</div>
					<h1
						style={{
							fontSize: isMobile ? 24 : 32,
							fontWeight: 700,
							color: "#fff",
							marginBottom: 12,
							letterSpacing: "-0.5px",
						}}
					>
						Create Your Account
					</h1>
					<p
						style={{
							fontSize: isMobile ? 13 : 15,
							color: "rgba(255,255,255,0.7)",
							lineHeight: 1.6,
						}}
					>
						Join thousands of students finding verified scholarships
					</p>
				</div>

				{/* Form Card */}
				<div
					style={{
						background: "rgba(255,255,255,0.95)",
						borderRadius: 20,
						padding: isMobile ? 20 : 32,
						backdropFilter: "blur(10px)",
						boxShadow: "0 16px 64px rgba(0,0,0,0.2)",
					}}
				>
					<form onSubmit={handleSubmit}>
						{/* User Type Selection */}
						<div style={{ marginBottom: 24 }}>
							<label
								style={{
									display: "block",
									fontSize: isMobile ? 12 : 13,
									fontWeight: 600,
									color: "#1f2937",
									marginBottom: 10,
								}}
							>
								I'm registering as
							</label>
							<div
								style={{
									display: "grid",
									gridTemplateColumns: "1fr 1fr 1fr",
									gap: 8,
								}}
							>
								{[
									{ value: "student", label: "👨‍🎓 Student", icon: "👨‍🎓" },
									{ value: "agency", label: "🏢 Agency", icon: "🏢" },
									{ value: "university", label: "🎓 University", icon: "🎓" },
								].map((type) => (
									<button
										key={type.value}
										type="button"
										onClick={() =>
											setFormData((prev) => ({ ...prev, userType: type.value }))
										}
										style={{
											padding: isMobile ? "8px 10px" : "10px 12px",
											border:
												formData.userType === type.value
													? "2px solid #1e40af"
													: "1.5px solid #e5e7eb",
											background:
												formData.userType === type.value
													? "rgba(30,64,175,0.1)"
													: "#fff",
											borderRadius: 10,
											fontSize: isMobile ? 11 : 12,
											fontWeight: 600,
											color:
												formData.userType === type.value
													? "#1e40af"
													: "#6b7280",
											cursor: "pointer",
											transition: "all 0.2s",
										}}
									>
										{type.icon}{" "}
										{isMobile
											? type.label.split(" ")[1].slice(0, 3)
											: type.label.split(" ")[1]}
									</button>
								))}
							</div>
						</div>

						{/* Name Fields */}
						<div
							style={{
								display: "grid",
								gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
								gap: 12,
								marginBottom: 20,
							}}
						>
							<div>
								<label
									style={{
										display: "block",
										fontSize: isMobile ? 12 : 13,
										fontWeight: 600,
										color: "#1f2937",
										marginBottom: 8,
									}}
								>
									First Name
								</label>
								<input
									type="text"
									name="firstName"
									value={formData.firstName}
									onChange={handleChange}
									placeholder="John"
									required
									style={{
										width: "100%",
										padding: "12px 16px",
										border: "1.5px solid #e5e7eb",
										borderRadius: 12,
										fontSize: "16px",
										fontFamily: "inherit",
										transition: "all 0.2s",
										boxSizing: "border-box",
										outline: "none",
									}}
									onFocus={(e) => {
										e.target.style.borderColor = "#1e40af";
										e.target.style.boxShadow = "0 0 0 4px rgba(30,64,175,0.1)";
									}}
									onBlur={(e) => {
										e.target.style.borderColor = "#e5e7eb";
										e.target.style.boxShadow = "none";
									}}
								/>
							</div>
							<div>
								<label
									style={{
										display: "block",
										fontSize: isMobile ? 12 : 13,
										fontWeight: 600,
										color: "#1f2937",
										marginBottom: 8,
									}}
								>
									Last Name
								</label>
								<input
									type="text"
									name="lastName"
									value={formData.lastName}
									onChange={handleChange}
									placeholder="Doe"
									required
									style={{
										width: "100%",
										padding: "12px 16px",
										border: "1.5px solid #e5e7eb",
										borderRadius: 12,
										fontSize: "16px",
										fontFamily: "inherit",
										transition: "all 0.2s",
										boxSizing: "border-box",
										outline: "none",
									}}
									onFocus={(e) => {
										e.target.style.borderColor = "#1e40af";
										e.target.style.boxShadow = "0 0 0 4px rgba(30,64,175,0.1)";
									}}
									onBlur={(e) => {
										e.target.style.borderColor = "#e5e7eb";
										e.target.style.boxShadow = "none";
									}}
								/>
							</div>
						</div>

						{/* Email Field */}
						<div style={{ marginBottom: 20 }}>
							<label
								style={{
									display: "block",
									fontSize: isMobile ? 12 : 13,
									fontWeight: 600,
									color: "#1f2937",
									marginBottom: 8,
								}}
							>
								Email Address
							</label>
							<input
								type="email"
								name="email"
								value={formData.email}
								onChange={handleChange}
								placeholder="you@example.com"
								required
								style={{
									width: "100%",
									padding: "12px 16px",
									border: "1.5px solid #e5e7eb",
									borderRadius: 12,
									fontSize: "16px",
									fontFamily: "inherit",
									transition: "all 0.2s",
									boxSizing: "border-box",
									outline: "none",
								}}
								onFocus={(e) => {
									e.target.style.borderColor = "#1e40af";
									e.target.style.boxShadow = "0 0 0 4px rgba(30,64,175,0.1)";
								}}
								onBlur={(e) => {
									e.target.style.borderColor = "#e5e7eb";
									e.target.style.boxShadow = "none";
								}}
							/>
						</div>

						{/* Password Fields */}
						<div
							style={{
								display: "grid",
								gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
								gap: 12,
								marginBottom: 20,
							}}
						>
							<div>
								<label
									style={{
										display: "block",
										fontSize: isMobile ? 12 : 13,
										fontWeight: 600,
										color: "#1f2937",
										marginBottom: 8,
									}}
								>
									Password
								</label>
								<div style={{ position: "relative" }}>
									<input
										type={showPassword ? "text" : "password"}
										name="password"
										value={formData.password}
										onChange={handleChange}
										placeholder="••••••••"
										required
										style={{
											width: "100%",
											padding: "12px 16px",
											paddingRight: 40,
											border: "1.5px solid #e5e7eb",
											borderRadius: 12,
											fontSize: "16px",
											fontFamily: "inherit",
											transition: "all 0.2s",
											boxSizing: "border-box",
											outline: "none",
										}}
										onFocus={(e) => {
											e.target.style.borderColor = "#1e40af";
											e.target.style.boxShadow =
												"0 0 0 4px rgba(30,64,175,0.1)";
										}}
										onBlur={(e) => {
											e.target.style.borderColor = "#e5e7eb";
											e.target.style.boxShadow = "none";
										}}
									/>
									<button
										type="button"
										onClick={() => setShowPassword(!showPassword)}
										style={{
											position: "absolute",
											right: 12,
											top: "50%",
											transform: "translateY(-50%)",
											background: "none",
											border: "none",
											fontSize: 16,
											cursor: "pointer",
											color: "#6b7280",
										}}
									>
										{showPassword ? "👁️" : "👁️‍🗨️"}
									</button>
								</div>
							</div>
							<div>
								<label
									style={{
										display: "block",
										fontSize: isMobile ? 12 : 13,
										fontWeight: 600,
										color: "#1f2937",
										marginBottom: 8,
									}}
								>
									Confirm Password
								</label>
								<div style={{ position: "relative" }}>
									<input
										type={showConfirmPassword ? "text" : "password"}
										name="confirmPassword"
										value={formData.confirmPassword}
										onChange={handleChange}
										placeholder="••••••••"
										required
										style={{
											width: "100%",
											padding: "12px 16px",
											paddingRight: 40,
											border: `1.5px solid ${!passwordMatch && formData.confirmPassword ? "#dc2626" : "#e5e7eb"}`,
											borderRadius: 12,
											fontSize: "16px",
											fontFamily: "inherit",
											transition: "all 0.2s",
											boxSizing: "border-box",
											outline: "none",
										}}
										onFocus={(e) => {
											e.target.style.borderColor = "#1e40af";
											e.target.style.boxShadow =
												"0 0 0 4px rgba(30,64,175,0.1)";
										}}
										onBlur={(e) => {
											e.target.style.borderColor =
												!passwordMatch && formData.confirmPassword
													? "#dc2626"
													: "#e5e7eb";
											e.target.style.boxShadow = "none";
										}}
									/>
									<button
										type="button"
										onClick={() => setShowConfirmPassword(!showConfirmPassword)}
										style={{
											position: "absolute",
											right: 12,
											top: "50%",
											transform: "translateY(-50%)",
											background: "none",
											border: "none",
											fontSize: 16,
											cursor: "pointer",
											color: "#6b7280",
										}}
									>
										{showConfirmPassword ? "👁️" : "👁️‍🗨️"}
									</button>
								</div>
								{!passwordMatch && formData.confirmPassword && (
									<span
										style={{
											fontSize: 12,
											color: "#dc2626",
											marginTop: 4,
											display: "block",
										}}
									>
										Passwords don't match
									</span>
								)}
							</div>
						</div>

						{/* Terms & Conditions */}
						<div
							style={{
								display: "flex",
								alignItems: "flex-start",
								marginBottom: 24,
								gap: 8,
							}}
						>
							<input
								type="checkbox"
								id="terms"
								name="agreeToTerms"
								checked={formData.agreeToTerms}
								onChange={handleChange}
								required
								style={{
									width: 18,
									height: 18,
									cursor: "pointer",
									accentColor: "#1e40af",
									marginTop: 2,
									flexShrink: 0,
								}}
							/>
							<label
								htmlFor="terms"
								style={{
									fontSize: isMobile ? 12 : 13,
									color: "#6b7280",
									cursor: "pointer",
									lineHeight: 1.5,
								}}
							>
								I agree to the{" "}
								<button
									type="button"
									onClick={() => {}}
									style={{
										background: "none",
										border: "none",
										color: "#1e40af",
										cursor: "pointer",
										textDecoration: "none",
									}}
								>
									Terms of Service
								</button>{" "}
								and{" "}
								<button
									type="button"
									onClick={() => {}}
									style={{
										background: "none",
										border: "none",
										color: "#1e40af",
										cursor: "pointer",
										textDecoration: "none",
									}}
								>
									Privacy Policy
								</button>
							</label>
						</div>

						{/* Register Button */}
						<button
							type="submit"
							disabled={isLoading || !formData.agreeToTerms}
							style={{
								width: "100%",
								padding: "12px 24px",
								background:
									isLoading || !formData.agreeToTerms
										? "linear-gradient(135deg, #9ca3af, #6b7280)"
										: "linear-gradient(135deg, #1e40af, #1d4ed8)",
								color: "#fff",
								border: "none",
								borderRadius: 12,
								fontSize: isMobile ? 14 : 15,
								fontWeight: 600,
								cursor:
									isLoading || !formData.agreeToTerms
										? "not-allowed"
										: "pointer",
								transition: "all 0.3s",
								boxShadow:
									isLoading || !formData.agreeToTerms
										? "0 2px 8px rgba(0,0,0,0.1)"
										: "0 4px 16px rgba(30,64,175,0.3)",
							}}
							onMouseEnter={(e) => {
								if (!isLoading && formData.agreeToTerms && !isMobile) {
									e.target.style.background =
										"linear-gradient(135deg, #1e3a8a, #1e40af)";
									e.target.style.boxShadow = "0 8px 24px rgba(30,64,175,0.4)";
									e.target.style.transform = "translateY(-2px)";
								}
							}}
							onMouseLeave={(e) => {
								if (!isLoading && formData.agreeToTerms && !isMobile) {
									e.target.style.background =
										"linear-gradient(135deg, #1e40af, #1d4ed8)";
									e.target.style.boxShadow = "0 4px 16px rgba(30,64,175,0.3)";
									e.target.style.transform = "translateY(0)";
								}
							}}
						>
							{isLoading ? "Creating Account..." : "Create Account"}
						</button>
					</form>

					{/* Sign In Link */}
					<div
						style={{
							textAlign: "center",
							fontSize: isMobile ? 13 : 14,
							color: "#6b7280",
							marginTop: 24,
						}}
					>
						Already have an account?{" "}
						<button
							onClick={() => onNavigate("login")}
							style={{
								background: "none",
								border: "none",
								color: "#1e40af",
								fontWeight: 600,
								cursor: "pointer",
								transition: "color 0.2s",
							}}
							onMouseEnter={(e) => (e.target.style.color = "#1d4ed8")}
							onMouseLeave={(e) => (e.target.style.color = "#1e40af")}
						>
							Sign in
						</button>
					</div>
				</div>

				{/* Back to Home */}
				<div style={{ textAlign: "center", marginTop: 24 }}>
					<button
						onClick={() => onNavigate("home")}
						style={{
							fontSize: isMobile ? 12 : 14,
							color: "rgba(255,255,255,0.7)",
							background: "none",
							border: "none",
							cursor: "pointer",
							transition: "color 0.2s",
						}}
						onMouseEnter={(e) => (e.target.style.color = "#fff")}
						onMouseLeave={(e) =>
							(e.target.style.color = "rgba(255,255,255,0.7)")
						}
					>
						← Back to Home
					</button>
				</div>
			</div>
		</div>
	);
}

export default Register;
