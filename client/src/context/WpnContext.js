import React from "react";

const WpnContext = React.createContext({
    wpnState: [],
    setwpnState: () => {},
});

export default WpnContext;
