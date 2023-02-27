import ReactDOM from "react-dom/client"
import { Canvas } from "@react-three/fiber"
import App from "./App"
import "./index.css"

ReactDOM.createRoot(document.getElementById("root")).render(
	<Canvas
		camera={{
			fov: 45,
			near: 0.1,
			far: 200,
			position: [1, 2, 6],
		}}
	>
		<App />
	</Canvas>
)
