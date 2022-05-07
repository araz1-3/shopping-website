import React from 'react';

import Logo1 from "../../assets/images/client-logo-1-p3r58p8sirkd3so4f8msnirj2twc6jqhuk43s4jx7i.png"
import Logo2 from "../../assets/images/client-logo-2-p3r58q6mpllnfemr9r1f80izo7rpe8u86orl9eij10.png"
import Logo3 from "../../assets/images/client-logo-3-p3r58q6mpllnfemr9r1f80izo7rpe8u86orl9eij10.png"
import Logo4 from "../../assets/images/client-logo-4-p3r58r4gwfmxr0le49g1siag9ln2lxxyitf2qoh4te.png"

const Logos = () => {
    return (
        <div className="flex flex-col md:flex-row items-center gap-14 md:gap-5 justify-evenly my-20">
            <img  src={Logo1} alt="logo"/>
            <img  src={Logo2} alt="logo"/>
            <img  src={Logo3} alt="logo"/>
            <img  src={Logo4} alt="logo"/>
        </div>
    );
};

export default Logos;