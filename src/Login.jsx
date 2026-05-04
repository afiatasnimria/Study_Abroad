import { useEffect, useState } from "react";
import "./AuthPages.css";

function Login({ onNavigate }) {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [showPassword, setShowPassword] = useState(false);
	const [rememberMe, setRememberMe] = useState(false);
	const [isLoading, setIsLoading] = useState(false);
	const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

	useEffect(() => {
		const handleResize = () => {
			setIsMobile(window.innerWidth < 768);
		};
		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	const handleSubmit = (e) => {
		e.preventDefault();
		setIsLoading(true);
		// Simulate API call
		setTimeout(() => {
			setIsLoading(false);
			console.log({ email, password, rememberMe });
			alert("Login successful! (Demo)");
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
					top: "10%",
					right: "-5%",
					width: isMobile ? 250 : 400,
					height: isMobile ? 250 : 400,
					background:
						"radial-gradient(circle, rgba(30,64,175,0.3) 0%, transparent 70%)",
					borderRadius: "50%",
					pointerEvents: "none",
				}}
			/>
			<div
				style={{
					position: "absolute",
					bottom: "5%",
					left: "-10%",
					width: isMobile ? 200 : 350,
					height: isMobile ? 200 : 350,
					background:
						"radial-gradient(circle, rgba(8,145,178,0.2) 0%, transparent 70%)",
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
					maxWidth: 420,
				}}
			>
				{/* Header */}
				<div style={{ textAlign: "center", marginBottom: isMobile ? 24 : 40 }}>
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
						Welcome Back
					</h1>
					<p
						style={{
							fontSize: isMobile ? 13 : 15,
							color: "rgba(255,255,255,0.7)",
							lineHeight: 1.6,
						}}
					>
						Sign in to your account to continue your scholarship journey
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
								value={email}
								onChange={(e) => setEmail(e.target.value)}
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

						{/* Password Field */}
						<div style={{ marginBottom: 24 }}>
							<div
								style={{
									display: "flex",
									justifyContent: "space-between",
									alignItems: "center",
									marginBottom: 8,
									flexWrap: "wrap",
									gap: 4,
								}}
							>
								<label
									style={{
										fontSize: isMobile ? 12 : 13,
										fontWeight: 600,
										color: "#1f2937",
									}}
								>
									Password
								</label>
								<button
									type="button"
									onClick={() => {}}
									style={{
										fontSize: 12,
										color: "#1e40af",
										background: "none",
										border: "none",
										cursor: "pointer",
										fontWeight: 500,
										transition: "color 0.2s",
									}}
									onMouseEnter={(e) => (e.target.style.color = "#1d4ed8")}
									onMouseLeave={(e) => (e.target.style.color = "#1e40af")}
								>
									Forgot password?
								</button>
							</div>
							<div style={{ position: "relative" }}>
								<input
									type={showPassword ? "text" : "password"}
									value={password}
									onChange={(e) => setPassword(e.target.value)}
									placeholder="••••••••"
									required
									style={{
										width: "100%",
										padding: "12px 16px",
										paddingRight: 48,
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
								<button
									type="button"
									onClick={() => setShowPassword(!showPassword)}
									style={{
										position: "absolute",
										right: 16,
										top: "50%",
										transform: "translateY(-50%)",
										background: "none",
										border: "none",
										fontSize: 18,
										cursor: "pointer",
										color: "#6b7280",
									}}
								>
									{showPassword ? "👁️" : "👁️‍🗨️"}
								</button>
							</div>
						</div>

						{/* Remember Me */}
						<div
							style={{
								display: "flex",
								alignItems: "center",
								marginBottom: 24,
							}}
						>
							<input
								type="checkbox"
								id="remember"
								checked={rememberMe}
								onChange={(e) => setRememberMe(e.target.checked)}
								style={{
									width: 18,
									height: 18,
									cursor: "pointer",
									accentColor: "#1e40af",
								}}
							/>
							<label
								htmlFor="remember"
								style={{
									marginLeft: 8,
									fontSize: isMobile ? 12 : 14,
									color: "#4b5563",
									cursor: "pointer",
								}}
							>
								Remember me
							</label>
						</div>

						{/* Login Button */}
						<button
							type="submit"
							disabled={isLoading}
							style={{
								width: "100%",
								padding: "12px 24px",
								background: isLoading
									? "linear-gradient(135deg, #9ca3af, #6b7280)"
									: "linear-gradient(135deg, #1e40af, #1d4ed8)",
								color: "#fff",
								border: "none",
								borderRadius: 12,
								fontSize: isMobile ? 14 : 15,
								fontWeight: 600,
								cursor: isLoading ? "not-allowed" : "pointer",
								transition: "all 0.3s",
								boxShadow: isLoading
									? "0 2px 8px rgba(0,0,0,0.1)"
									: "0 4px 16px rgba(30,64,175,0.3)",
							}}
							onMouseEnter={(e) => {
								if (!isLoading && !isMobile) {
									e.target.style.background =
										"linear-gradient(135deg, #1e3a8a, #1e40af)";
									e.target.style.boxShadow = "0 8px 24px rgba(30,64,175,0.4)";
									e.target.style.transform = "translateY(-2px)";
								}
							}}
							onMouseLeave={(e) => {
								if (!isLoading && !isMobile) {
									e.target.style.background =
										"linear-gradient(135deg, #1e40af, #1d4ed8)";
									e.target.style.boxShadow = "0 4px 16px rgba(30,64,175,0.3)";
									e.target.style.transform = "translateY(0)";
								}
							}}
						>
							{isLoading ? "Signing in..." : "Sign In"}
						</button>
					</form>

					{/* Divider */}
					<div
						style={{
							display: "flex",
							alignItems: "center",
							gap: 12,
							margin: "24px 0",
						}}
					>
						<div style={{ flex: 1, height: 1, background: "#e5e7eb" }} />
						<span style={{ fontSize: isMobile ? 11 : 13, color: "#9ca3af" }}>
							Or continue with
						</span>
						<div style={{ flex: 1, height: 1, background: "#e5e7eb" }} />
					</div>

					{/* Social Buttons */}
					<div
						style={{
							display: "flex",
							gap: 12,
							marginBottom: 24,
						}}
					>
						{["👍", "🔵", "📘"].map((icon, idx) => (
							<button
								key={idx}
								style={{
									flex: 1,
									padding: "10px 16px",
									border: "1.5px solid #e5e7eb",
									background: "#fff",
									borderRadius: 10,
									fontSize: 18,
									cursor: "pointer",
									transition: "all 0.2s",
									display: "flex",
									alignItems: "center",
									justifyContent: "center",
								}}
								onMouseEnter={(e) => {
									e.target.style.background = "#f9fafb";
									e.target.style.borderColor = "#d1d5db";
								}}
								onMouseLeave={(e) => {
									e.target.style.background = "#fff";
									e.target.style.borderColor = "#e5e7eb";
								}}
							>
								{icon}
							</button>
						))}
					</div>

					{/* Sign Up Link */}
					<div
						style={{
							textAlign: "center",
							fontSize: isMobile ? 13 : 14,
							color: "#6b7280",
							marginBottom: 16,
						}}
					>
						Don't have an account?{" "}
						<button
							onClick={() => onNavigate("register")}
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
							Create one
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

export default Login;
