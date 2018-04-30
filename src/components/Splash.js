import React from "react";
import EnterButton from "./EnterButton";


const Splash = () => (
<React.Fragment>
<div className="wrapper">
<section id="main-image">
<EnterButton />
</section>
<canvas id='splash-canvas'>
</canvas>
<script src="ashes.js"></script>
</div>

</React.Fragment>
);


export default Splash;
