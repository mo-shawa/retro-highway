import { useState } from "react"
import { OrbitControls, useGLTF } from "@react-three/drei"
import "./App.css"

function App() {
	const { scene, nodes } = useGLTF("./gltf/retro-highway_v4_decimated.gltf")
	console.log(nodes, scene)

	return (
		<>
			<color args={["#333333"]} attach="background" />
			<OrbitControls makeDefault />
			<primitive object={scene} />
			<mesh scale={1.5}>
				<boxGeometry />
				<meshNormalMaterial />
			</mesh>
		</>
	)
}

export default App
