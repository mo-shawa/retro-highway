import { Suspense } from "react"
import { OrbitControls, useGLTF, Environment } from "@react-three/drei"
import "./App.css"

function App() {
	const { scene, nodes } = useGLTF("./gltf/retro-highway.gltf")

	return (
		<>
			<Suspense fallback={null}>
				<Environment preset="sunset" background />
				{/* <ambientLight intensity={1} /> */}
				{/* <directionalLight intensity={1} /> */}
				<OrbitControls makeDefault />
				<primitive object={scene} />
			</Suspense>
		</>
	)
}

export default App
