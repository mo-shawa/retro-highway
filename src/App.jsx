import { OrbitControls, useGLTF, Environment } from "@react-three/drei"
import { EffectComposer, Noise } from "@react-three/postprocessing"
import "./App.css"

function App() {
	const { scene, nodes } = useGLTF("./gltf/retro-highway.gltf")

	return (
		<>
			<EffectComposer>
				<Noise opacity={0.1} />
			</EffectComposer>
			<Environment preset="forest" background />
			{/* <ambientLight intensity={1} /> */}
			{/* <directionalLight intensity={1} /> */}
			<OrbitControls makeDefault />
			<primitive object={scene} />
		</>
	)
}

export default App
