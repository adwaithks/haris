import React from 'react'
import LayoutPage from '../Pages/LayoutPage'
import Home from '.././Pages/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from '../Pages/About'
const Router = () => {
	return (
		<div>
				<BrowserRouter>
					<Routes>
						<Route path="/" element={<LayoutPage />}>
							<Route index element={<Home />} />
							<Route path="/about" element={<About />} />
						</Route>
					</Routes>
				</BrowserRouter>
		</div>
	)
}

export default Router