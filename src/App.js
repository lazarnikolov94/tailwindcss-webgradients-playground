import React from 'react';

export default () => (
  <>
    <div className="container mx-auto mt-3 p-5">
      <h1 className="text-4xl text-indigo-500 hover:text-indigo-700"><a href="https://www.npmjs.com/package/tailwindcss-webgradients" target="_blank">Tailwind CSS Webgradients Plugin</a></h1>
      <p className="text-xl text-gray-600">This is a Tailwind CSS plugin that brings <a className="text-indigo-500 hover:text-indigo-700" href="https://webgradients.com" target="_blank">WebGradient's</a> gradients into your app. Made with ❤️ by <a className="text-indigo-500 hover:text-indigo-700" target="_blank" href="https://twitter.com/NikolovLazar">Lazar Nikolov</a> at <a className="text-indigo-500 hover:text-indigo-700" target="_blank" href="https://codechem.com">CodeChem</a>.</p>
    </div>
    <div className="p-10 flex flex-wrap justify-around container mx-auto">
      <div className="gradient-circle hover:shadow-xl bg-webgradient-loon-crest hover:bg-webgradient-rainy-ashville">Loon Crest / Rainy Ashville</div>
      <div className="gradient-circle hover:shadow-xl bg-webgradient-wild-apple hover:bg-webgradient-sunny-morning">Wild Apple / Sunny Morning</div>
      <div className="gradient-circle hover:shadow-xl bg-webgradient-juicy-peach hover:bg-webgradient-winter-neva">Juicy Peach / Winter Neva</div>
      <div className="gradient-circle hover:shadow-xl bg-webgradient-ripe-malinka hover:bg-webgradient-arielles-smile">Ripe Malinka / Arielle's Smile</div>
      <div className="gradient-circle hover:shadow-xl bg-webgradient-fly-high hover:bg-webgradient-february-ink">Fly High / February Ink</div>
      <div className="gradient-circle hover:shadow-xl bg-webgradient-grown-early hover:bg-webgradient-great-whale">Grown Early / Great Whale</div>
      <div className="gradient-circle hover:shadow-xl bg-webgradient-sky-glider hover:bg-webgradient-love-kiss">Sky Glider / Love Kiss</div>
      <div className="gradient-circle hover:shadow-xl bg-webgradient-premium-dark hover:bg-webgradient-phoenix-start text-white hover:text-black">Premium Dark / Phoenix Start</div>
      <div className="gradient-circle hover:shadow-xl bg-webgradient-confident-cloud hover:bg-webgradient-hidden-jaguar">Confident Cloud / Hidden Jaguar</div>
    </div>
  </>
);