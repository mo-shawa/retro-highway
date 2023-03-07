import ReactDOM from "react-dom/client"
import { Suspense } from "react"
import { Html } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import App from "./App"
import "./index.css"

ReactDOM.createRoot(document.getElementById("root")).render(
	<Canvas
		camera={{
			fov: 45,
			near: 0.1,
			far: 200,
			position: [-2.9, 0.5, 1.5],
		}}
	>
		<Suspense
			fallback={
				<Html>
					<h1>Loading...</h1>
				</Html>
			}
		>
			<App />
		</Suspense>
	</Canvas>
)
