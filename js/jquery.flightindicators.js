/*
Skyhawk Flight Instruments (https://github.com/uw-ray/Skyhawk-Flight-Instruments)
By Raymond Blaga (raymond.blaga@gmail.com), Edward Hanna (edward.hanna@senecacollege.ca), Pavlo Kuzhel (pavlo.kuzhel@senecacollege.ca)

Forked from jQuery Flight Indicators (https://github.com/sebmatton/jQuery-Flight-Indicators)
By Sébastien Matton (seb_matton@hotmail.com)

Published under GPLv3 License.
*/



// these functions reused form https://stackoverflow.com/questions/5736398/how-to-calculate-the-svg-path-for-an-arc-of-a-circle

function polarToCartesian(centerX, centerY, radius, angleInDegrees) {
  var angleInRadians = (angleInDegrees-90) * Math.PI / 180.0;

  return {
    x: centerX + (radius * Math.cos(angleInRadians)),
    y: centerY + (radius * Math.sin(angleInRadians))
  };
}

function describeArc(x, y, radius, startAngle, endAngle){

    var start = polarToCartesian(x, y, radius, endAngle);
    var end = polarToCartesian(x, y, radius, startAngle);

    var largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";

    var d = [
        "M", start.x, start.y,
        "A", radius, radius, 0, largeArcFlag, 0, end.x, end.y
    ].join(" ");

    return d;
}


function get_target_speed(rpm){

    rpm = rpm*0.1047198;

    m = 0.05; // kg
    rho = 1.3;
    T = 0.05; // m
    Cl = 1.3;
    l = 0.5; // m

    v = 0;
    v = (Math.sqrt( (2/3)*(m/(rho*T*Cl)) - (l*l)/18 ) - (2/3)*l)*rpm;

    return v;
}

function generate_airspeed_gauge( options ){

    var code = `
    <?xml version="1.0" encoding="UTF-8" standalone="no"?>
    <svg
       xmlns:dc="http://purl.org/dc/elements/1.1/"
       xmlns:cc="http://creativecommons.org/ns#"
       xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
       xmlns:svg="http://www.w3.org/2000/svg"
       xmlns="http://www.w3.org/2000/svg"
       xmlns:xlink="http://www.w3.org/1999/xlink"
       height="100%"
       version="1.1"
       x="0px"
       y="0px"
       width="400.66699"
       viewBox="0 0 400.667 400.666"
       xml:space="preserve"><metadata
         id="metadata111"><rdf:RDF><cc:Work
             rdf:about=""><dc:format>image/svg+xml</dc:format><dc:type
               rdf:resource="http://purl.org/dc/dcmitype/StillImage" /><dc:title></dc:title></cc:Work></rdf:RDF></metadata><defs
         id="defs109"><linearGradient
           id="linearGradient1116"><stop
             style="stop-color:#505050;stop-opacity:1"
             offset="0"
             id="stop1112" /><stop
             style="stop-color:#c5c5c9;stop-opacity:1"
             offset="1"
             id="stop1114" /></linearGradient><rect
           id="rect1082"
           height="60.351574"
           width="111.59002"
           y="254.1123"
           x="262.00272" /><rect
           id="rect1076"
           height="50.668552"
           width="119.39414"
           y="258.35907"
           x="253.60611" /><rect
           id="rect1070"
           height="42.523296"
           width="110.7291"
           y="264.7139"
           x="263.08804" /><linearGradient
           id="linearGradient1066"
           gradientUnits="userSpaceOnUse"
           x1="148.1084"
           y1="142.3994"
           x2="163.70171"
           y2="169.4077"><stop
             offset="0"
             style="stop-color:#2d2d2d;stop-opacity:1"
             id="stop1062" /><stop
             offset="1"
             style="stop-color:#000000"
             id="stop1064" /></linearGradient><rect
           x="64.390533"
           y="21.021383"
           width="26.017988"
           height="21.374962"
           id="rect228" /><radialGradient
           gradientTransform="matrix(1.6514344,0,0,1.6514344,-84.144237,-60.123606)"
           gradientUnits="userSpaceOnUse"
           r="72.725906"
           fy="92.274101"
           fx="129.2859"
           cy="92.274101"
           cx="129.2859"
           id="radialGradient5742-9-3"
           xlink:href="#linearGradient5132" /><linearGradient
           id="linearGradient5132"><stop
             style="stop-color:#969696;stop-opacity:1"
             offset="0"
             id="stop5134" /><stop
             style="stop-color:#000000;stop-opacity:1"
             offset="1"
             id="stop5136" /></linearGradient><linearGradient
           id="linearGradient8985"
           gradientUnits="userSpaceOnUse"
           x1="148.1084"
           y1="142.3994"
           x2="163.70171"
           y2="169.4077"><stop
             offset="0"
             style="stop-color:#2d2d2d;stop-opacity:1"
             id="stop8987" /><stop
             offset="1"
             style="stop-color:#000000"
             id="stop8989" /></linearGradient><rect
           id="rect241"
           height="21.374962"
           width="26.017988"
           y="21.021383"
           x="64.390533" /><rect
           x="64.390533"
           y="21.021383"
           width="26.017988"
           height="21.374962"
           id="rect228-3-3" /><rect
           x="64.390533"
           y="21.021383"
           width="26.017988"
           height="21.374962"
           id="rect1093" /><rect
           id="rect228-3-3-6"
           height="21.374962"
           width="26.017988"
           y="21.021383"
           x="64.390533" /><rect
           id="rect1122"
           height="21.374962"
           width="26.017988"
           y="21.021383"
           x="64.390533" /><rect
           id="rect228-3-3-69"
           height="21.374962"
           width="26.017988"
           y="21.021383"
           x="64.390533" /><rect
           id="rect1122-6"
           height="21.374962"
           width="26.017988"
           y="21.021383"
           x="64.390533" /><rect
           id="rect1122-9"
           height="21.374962"
           width="26.017988"
           y="21.021383"
           x="64.390533" /><rect
           id="rect228-3-3-1"
           height="21.374962"
           width="26.017988"
           y="21.021383"
           x="64.390533" /><rect
           id="rect1122-7"
           height="21.374962"
           width="26.017988"
           y="21.021383"
           x="64.390533" /><rect
           x="64.390533"
           y="21.021383"
           width="26.017988"
           height="21.374962"
           id="rect228-3-3-1-0" /><rect
           x="64.390533"
           y="21.021383"
           width="26.017988"
           height="21.374962"
           id="rect1200" /><rect
           x="64.390533"
           y="21.021383"
           width="26.017988"
           height="21.374962"
           id="rect228-3-3-1-5" /><rect
           x="64.390533"
           y="21.021383"
           width="26.017988"
           height="21.374962"
           id="rect1200-4" /><rect
           x="64.390533"
           y="21.021383"
           width="26.017988"
           height="21.374962"
           id="rect228-3-3-1-9" /><rect
           x="64.390533"
           y="21.021383"
           width="26.017988"
           height="21.374962"
           id="rect1200-46" /><rect
           x="64.390533"
           y="21.021383"
           width="26.017988"
           height="21.374962"
           id="rect228-3-3-1-3" /><rect
           x="64.390533"
           y="21.021383"
           width="26.017988"
           height="21.374962"
           id="rect1200-8" /><rect
           x="64.390533"
           y="21.021383"
           width="26.017988"
           height="21.374962"
           id="rect228-3-3-1-2" /><rect
           x="64.390533"
           y="21.021383"
           width="26.017988"
           height="21.374962"
           id="rect1200-7" /><rect
           x="64.390533"
           y="21.021383"
           width="26.017988"
           height="21.374962"
           id="rect228-3-3-1-7" /><rect
           x="64.390533"
           y="21.021383"
           width="26.017988"
           height="21.374962"
           id="rect1200-6" /><rect
           x="64.390533"
           y="21.021383"
           width="26.017988"
           height="21.374962"
           id="rect228-3-3-1-4" /><rect
           x="64.390533"
           y="21.021383"
           width="26.017988"
           height="21.374962"
           id="rect1200-3" /><rect
           id="rect228-3-3-1-4-2"
           height="21.374962"
           width="26.017988"
           y="21.021383"
           x="64.390533" /><rect
           id="rect1326"
           height="21.374962"
           width="26.017988"
           y="21.021383"
           x="64.390533" /><linearGradient
           gradientTransform="translate(-8,4)"
           gradientUnits="userSpaceOnUse"
           y2="314.02435"
           x2="314.78467"
           y1="245.27185"
           x1="315.1716"
           id="linearGradient1060"
           xlink:href="#linearGradient1066" /><linearGradient
           gradientTransform="translate(-8,4)"
           gradientUnits="userSpaceOnUse"
           y2="327.33197"
           x2="385.12726"
           y1="246.65819"
           x1="254.78203"
           id="linearGradient1110"
           xlink:href="#linearGradient1116" /><radialGradient
           xlink:href="#linearGradient1066"
           id="radialGradient10569"
           gradientUnits="userSpaceOnUse"
           gradientTransform="matrix(-0.8204649,2.946378,-3.7901473,-1.0554257,466.30384,-111.35403)"
           cx="102.20761"
           cy="62.268127"
           fx="102.20761"
           fy="62.268127"
           r="68.25" /><linearGradient
           gradientTransform="translate(-5.7811884,-0.66717712)"
           gradientUnits="userSpaceOnUse"
           y2="314.02435"
           x2="314.78467"
           y1="245.27185"
           x1="315.1716"
           id="linearGradient1060-5"
           xlink:href="#linearGradient1066" /><linearGradient
           gradientTransform="translate(-5.7811884,-0.66717712)"
           gradientUnits="userSpaceOnUse"
           y2="327.33197"
           x2="385.12726"
           y1="246.65819"
           x1="254.78203"
           id="linearGradient1110-6"
           xlink:href="#linearGradient1116" /><rect
           id="rect1082-1"
           height="60.351574"
           width="111.59002"
           y="254.1123"
           x="262.00272" /><rect
           id="rect1141"
           height="60.351574"
           width="111.59002"
           y="254.1123"
           x="262.00272" /><radialGradient
           xlink:href="#linearGradient5132"
           id="radialGradient5742-9-3-3"
           cx="129.2859"
           cy="92.274101"
           fx="129.2859"
           fy="92.274101"
           r="72.725906"
           gradientUnits="userSpaceOnUse"
           gradientTransform="matrix(1.6514344,0,0,1.6514344,-84.144237,-60.123606)" /><filter
           height="1.1376389"
           y="-0.068819433"
           width="1.9363791"
           x="-0.46818957"
           id="filter9003"
           style="color-interpolation-filters:sRGB"><feGaussianBlur
             id="feGaussianBlur9005"
             stdDeviation="2.1039833" /></filter><radialGradient
           xlink:href="#linearGradient9400"
           id="radialGradient9305-9"
           cx="442.59686"
           cy="111.30424"
           fx="442.59686"
           fy="111.30424"
           r="5.6430602"
           gradientTransform="matrix(2.2714401,-2.5951859,2.2515157,1.9706424,-812.72234,1043.3283)"
           gradientUnits="userSpaceOnUse" /><linearGradient
           id="linearGradient9400"><stop
             style="stop-color:#191919;stop-opacity:1"
             offset="0"
             id="stop9402" /><stop
             style="stop-color:#232323;stop-opacity:1"
             offset="1"
             id="stop9404" /></linearGradient></defs><g
         id="layer1"><circle
           style="display:inline;fill:url(#radialGradient10569);fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:2.14308;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1"
           id="circle8194"
           cx="200.3335"
           cy="200.33299"
           r="151.60699" /><path
           id="path8272"
           d="m 210.49238,319.18255 0.67909,7.9466"
           style="display:inline;fill:none;fill-rule:evenodd;stroke:#000000;stroke-width:2.44348001;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" /><path
           id="path8276"
           d="m 148.96337,307.98893 -3.4352,7.19786"
           style="display:inline;fill:none;fill-rule:evenodd;stroke:#000000;stroke-width:2.44348001;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" /><path
           id="path8278"
           d="m 125.34623,293.09533 -5.01342,6.20284"
           style="display:inline;fill:none;fill-rule:evenodd;stroke:#000000;stroke-width:2.44348001;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" /><path
           id="path8280"
           d="m 179.42405,317.76722 -1.39732,7.85219"
           style="display:inline;fill:none;fill-rule:evenodd;stroke:#000000;stroke-width:2.44348001;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" /><path
           id="path8282"
           d="m 113.99822,282.74764 -4.58541,4.40387"
           style="display:inline;fill:none;fill-rule:evenodd;stroke:#000000;stroke-width:1.77708006;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" /><path
           id="path8284"
           d="m 137.03298,301.52296 -3.35544,5.40012"
           style="display:inline;fill:none;fill-rule:evenodd;stroke:#000000;stroke-width:1.77708006;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" /><path
           id="path8286"
           d="m 163.7293,313.9419 -1.93147,6.05719"
           style="display:inline;fill:none;fill-rule:evenodd;stroke:#000000;stroke-width:1.77708006;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" /><g
           id="cifernik"><g
             transform="matrix(-1.7981389,1.3042559,-1.3042559,-1.7981389,553.13402,198.46482)"
             id="g1582"><g
               id="g9206"
               style="display:inline"><path
                 style="fill:#ffffff;fill-opacity:1;stroke:none"
                 d="m 193.37242,91.581932 v 1.385537 h -17.31921 v -1.385537 z"
                 id="path7404" /><circle
                 style="opacity:1;fill:#ffffff;fill-opacity:1;stroke:#1a1a1a;stroke-width:0.41564801;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1"
                 id="circle7705"
                 cx="-22.804193"
                 cy="31.47263"
                 r="0" /><path
                 id="path8023"
                 d="m 192.46212,103.0441 -0.12664,0.71818 -13.64004,-2.4051 0.12664,-0.71819 z"
                 style="fill:#ffffff;fill-opacity:1;stroke:none" /><path
                 id="path8025"
                 d="m 190.02169,71.81176 0.42816,1.317724 -16.47155,5.35193 -0.42816,-1.317724 z"
                 style="fill:#ffffff;fill-opacity:1;stroke:none" /><path
                 style="fill:#ffffff;fill-opacity:1;stroke:none"
                 d="m 180.72564,54.044642 0.8144,1.120921 -14.01153,10.179977 -0.81441,-1.120921 z"
                 id="path8027" /><path
                 id="path8029"
                 d="m 166.39423,40.019746 1.12092,0.814396 -10.17997,14.011534 -1.12093,-0.814392 z"
                 style="fill:#ffffff;fill-opacity:1;stroke:none" /><path
                 id="path8055"
                 d="m 189.74441,113.54287 -0.47388,1.30198 -16.27473,-5.92352 0.47388,-1.30198 z"
                 style="fill:#ffffff;fill-opacity:1;stroke:none" /><path
                 style="fill:#ffffff;fill-opacity:1;stroke:none"
                 d="m 178.82412,132.93855 -0.89061,1.06138 -13.26728,-11.13257 0.89061,-1.06138 z"
                 id="path8057" /><path
                 id="path8059"
                 d="m 161.92869,147.42957 -1.19992,0.69276 -8.6596,-14.99887 1.19992,-0.69276 z"
                 style="fill:#ffffff;fill-opacity:1;stroke:none" /><path
                 id="path8067"
                 d="m 80.636622,133.99991 -0.890605,-1.06141 13.267282,-11.13257 0.890599,1.06141 z"
                 style="fill:#ffffff;fill-opacity:1;stroke:none" /><path
                 style="fill:#ffffff;fill-opacity:1;stroke:none"
                 d="m 69.299612,114.84482 -0.473871,-1.30201 16.27473,-5.92351 0.473866,1.302 z"
                 id="path8069" /><path
                 id="path8071"
                 d="m 65.197735,92.967434 2e-5,-1.385562 17.319204,7e-6 -2.2e-5,1.385551 z"
                 style="fill:#ffffff;fill-opacity:1;stroke:none" /><path
                 style="fill:#ffffff;fill-opacity:1;stroke:none"
                 d="m 65.197735,92.967434 2e-5,-1.385562 17.319204,7e-6 -2.2e-5,1.385551 z"
                 id="path8073" /><path
                 id="path8075"
                 d="m 68.825738,71.006492 0.473909,-1.301996 16.274725,5.923524 -0.473907,1.301984 z"
                 style="fill:#ffffff;fill-opacity:1;stroke:none" /><path
                 style="fill:#ffffff;fill-opacity:1;stroke:none"
                 d="m 184.96877,124.00215 -0.36464,0.63156 -11.99485,-6.92522 0.36464,-0.63157 z"
                 id="path8089" /><path
                 id="path8091"
                 d="m 170.75925,141.1334 -0.55865,0.46876 -8.90291,-10.61006 0.55866,-0.46877 z"
                 style="fill:#ffffff;fill-opacity:1;stroke:none" /><path
                 style="fill:#ffffff;fill-opacity:1;stroke:none"
                 d="m 73.967732,124.63368 -0.364639,-0.63156 11.994828,-6.92523 0.364646,0.63157 z"
                 id="path8093" /><path
                 id="path8097"
                 d="m 66.236397,103.76225 -0.126641,-0.71819 13.640019,-2.40511 0.126644,0.7182 z"
                 style="fill:#ffffff;fill-opacity:1;stroke:none" /><path
                 style="fill:#ffffff;fill-opacity:1;stroke:none"
                 d="m 192.52637,81.889215 0.11408,0.720281 -13.67994,2.166697 -0.11408,-0.720292 z"
                 id="path8826" /><path
                 id="path8828"
                 d="m 186.22188,62.855148 0.33107,0.649776 -12.34085,6.287985 -0.33107,-0.649786 z"
                 style="fill:#ffffff;fill-opacity:1;stroke:none" /><path
                 style="fill:#ffffff;fill-opacity:1;stroke:none"
                 d="m 174.34411,46.700869 0.51565,0.515667 -9.79375,9.793762 -0.51566,-0.515677 z"
                 id="path8830" /><path
                 style="fill:#ffffff;fill-opacity:1;stroke:none"
                 d="m 88.595634,127.32199 -0.890601,-1.0614 5.324135,-4.46745 0.890595,1.06138 z"
                 id="path8967" /><path
                 id="path9193"
                 d="m 66.05107,81.828258 0.24062,-1.364508 17.056085,3.007455 -0.24062,1.364497 z"
                 style="fill:#ffffff;fill-opacity:1;stroke:none" /><path
                 style="fill:#ffffff;fill-opacity:1;stroke:none"
                 d="m 73.437433,60.830949 0.692798,-1.199921 14.998867,8.659608 -0.692794,1.19991 z"
                 id="path9195" /><path
                 style="fill:#ffffff;fill-opacity:1;stroke:none"
                 d="m 65.411555,87.052397 0.06355,-0.726495 13.797736,1.207139 -0.06356,0.726505 z"
                 id="path9197" /><path
                 id="path9199"
                 d="m 67.28879,76.040065 0.188738,-0.704423 13.378501,3.584751 -0.188751,0.704431 z"
                 style="fill:#ffffff;fill-opacity:1;stroke:none" /><path
                 style="fill:#ffffff;fill-opacity:1;stroke:none"
                 d="m 71.049776,65.521013 0.308193,-0.660948 12.552766,5.853443 -0.308206,0.660953 z"
                 id="path9202" /></g><circle
               transform="rotate(60.949961)"
               style="fill:#ffffff;fill-opacity:1;stroke:#1a1a1a;stroke-width:0.41564801;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1"
               id="circle7705-7"
               cx="-8.640687"
               cy="-129.7919"
               r="0" /><path
               id="path8023-7"
               d="m 151.22795,152.361 -0.68932,0.23802 -4.52071,-13.09192 0.68933,-0.23802 z"
               style="fill:#ffffff;fill-opacity:1;stroke:none" /><path
               id="path8055-0"
               d="m 140.73032,155.31877 -1.36829,0.21794 -2.72426,-17.1036 1.36829,-0.21795 z"
               style="fill:#ffffff;fill-opacity:1;stroke:none" /><path
               style="fill:#ffffff;fill-opacity:1;stroke:none"
               d="m 118.34706,155.21309 -1.36031,-0.26319 3.28981,-17.00388 1.36031,0.26319 z"
               id="path8057-7" /><path
               id="path8059-8"
               d="m 97.004174,147.61693 -1.188257,-0.71258 8.907083,-14.85324 1.18825,0.71258 z"
               style="fill:#ffffff;fill-opacity:1;stroke:none" /><path
               style="fill:#ffffff;fill-opacity:1;stroke:none"
               d="m 129.26794,155.98702 -0.72917,-0.0121 0.22962,-13.84855 0.72918,0.0121 z"
               id="path8089-1" /><path
               id="path8091-1"
               d="m 107.3921,151.88359 -0.68105,-0.26075 4.95226,-12.93485 0.68106,0.26075 z"
               style="fill:#ffffff;fill-opacity:1;stroke:none" /><path
               style="display:inline;fill:#ffffff;fill-opacity:1;stroke:none;stroke-width:1"
               d="m 88.294879,140.80064 -0.549818,-0.47908 9.09894,-10.44244 0.549827,0.47909 z"
               id="path8091-1-2" /></g><text
             id="text1649"
             y="297.19208"
             x="194.52017"
             style="font-style:normal;font-weight:normal;font-size:18.94140053px;line-height:1.25;font-family:sans-serif;fill:#000000;fill-opacity:1;stroke:none;stroke-width:0.789226"
             xml:space="preserve"><tspan
               style="font-size:18.94140053px;fill:#efeff0;fill-opacity:1;stroke-width:0.789226"
               y="297.19208"
               x="194.52017"
               id="tspan1647">0</tspan></text>
    <text
             xml:space="preserve"
             style="font-style:normal;font-weight:normal;font-size:18.94140053px;line-height:1.25;font-family:sans-serif;fill:#000000;fill-opacity:1;stroke:none;stroke-width:0.789226"
             x="165.65454"
             y="293.63086"
             id="text1649-3"><tspan
               id="tspan1647-6"
               x="165.65454"
               y="293.63086"
               style="font-size:18.94140053px;fill:#efeff0;fill-opacity:1;stroke-width:0.789226">2</tspan></text>
    <text
             xml:space="preserve"
             style="font-style:normal;font-weight:normal;font-size:18.94140053px;line-height:1.25;font-family:sans-serif;fill:#000000;fill-opacity:1;stroke:none;stroke-width:0.789226"
             x="140.13387"
             y="279.68732"
             id="text1649-4"><tspan
               id="tspan1647-9"
               x="140.13387"
               y="279.68732"
               style="font-size:18.94140053px;fill:#efeff0;fill-opacity:1;stroke-width:0.789226">4</tspan></text>
    <text
             xml:space="preserve"
             style="font-style:normal;font-weight:normal;font-size:18.94140053px;line-height:1.25;font-family:sans-serif;fill:#000000;fill-opacity:1;stroke:none;stroke-width:0.789226"
             x="122.85003"
             y="259.4834"
             id="text1649-8"><tspan
               id="tspan1647-4"
               x="122.85003"
               y="259.4834"
               style="font-size:18.94140053px;fill:#efeff0;fill-opacity:1;stroke-width:0.789226">6</tspan></text>
    <text
             xml:space="preserve"
             style="font-style:normal;font-weight:normal;font-size:18.94140053px;line-height:1.25;font-family:sans-serif;fill:#000000;fill-opacity:1;stroke:none;stroke-width:0.789226"
             x="107.98622"
             y="231.65863"
             id="text1649-6"><tspan
               id="tspan1647-99"
               x="107.98622"
               y="231.65863"
               style="font-size:18.94140053px;fill:#efeff0;fill-opacity:1;stroke-width:0.789226">8</tspan></text>
    <text
             xml:space="preserve"
             style="font-style:normal;font-weight:normal;font-size:15.45750046px;line-height:1.25;font-family:sans-serif;fill:#000000;fill-opacity:1;stroke:none;stroke-width:0.64406401"
             x="101.81785"
             y="199.11694"
             id="text1649-7"><tspan
               id="tspan1647-8"
               x="101.81785"
               y="199.11694"
               style="font-size:15.45750046px;fill:#efeff0;fill-opacity:1;stroke-width:0.64406401">10</tspan></text>
    <text
             id="text1649-7-0"
             y="168.34386"
             x="108.19023"
             style="font-style:normal;font-weight:normal;font-size:15.45750046px;line-height:1.25;font-family:sans-serif;fill:#000000;fill-opacity:1;stroke:none;stroke-width:0.64406401"
             xml:space="preserve"><tspan
               style="font-size:15.45750046px;fill:#efeff0;fill-opacity:1;stroke-width:0.64406401"
               y="168.34386"
               x="108.19023"
               id="tspan1647-8-1">12</tspan></text>
    <text
             id="text1649-7-4"
             y="142.2397"
             x="128.56021"
             style="font-style:normal;font-weight:normal;font-size:15.45750046px;line-height:1.25;font-family:sans-serif;fill:#000000;fill-opacity:1;stroke:none;stroke-width:0.64406401"
             xml:space="preserve"><tspan
               style="font-size:15.45750046px;fill:#efeff0;fill-opacity:1;stroke-width:0.64406401"
               y="142.2397"
               x="128.56021"
               id="tspan1647-8-3">14</tspan></text>
    <text
             id="text1649-7-5"
             y="124.75047"
             x="152.49036"
             style="font-style:normal;font-weight:normal;font-size:15.45750046px;line-height:1.25;font-family:sans-serif;fill:#000000;fill-opacity:1;stroke:none;stroke-width:0.64406401"
             xml:space="preserve"><tspan
               style="font-size:15.45750046px;fill:#efeff0;fill-opacity:1;stroke-width:0.64406401"
               y="124.75047"
               x="152.49036"
               id="tspan1647-8-9">16</tspan></text>
    <text
             id="text1649-7-43"
             y="114.42108"
             x="178.92007"
             style="font-style:normal;font-weight:normal;font-size:15.45750046px;line-height:1.25;font-family:sans-serif;fill:#000000;fill-opacity:1;stroke:none;stroke-width:0.64406401"
             xml:space="preserve"><tspan
               style="font-size:15.45750046px;fill:#efeff0;fill-opacity:1;stroke-width:0.64406401"
               y="114.42108"
               x="178.92007"
               id="tspan1647-8-8">18</tspan></text>
    <text
             id="text1649-7-55"
             y="116.55424"
             x="210.56659"
             style="font-style:normal;font-weight:normal;font-size:15.45750046px;line-height:1.25;font-family:sans-serif;fill:#000000;fill-opacity:1;stroke:none;stroke-width:0.64406401"
             xml:space="preserve"><tspan
               style="font-size:15.45750046px;fill:#efeff0;fill-opacity:1;stroke-width:0.64406401"
               y="116.55424"
               x="210.56659"
               id="tspan1647-8-2">20</tspan></text>
    <text
             xml:space="preserve"
             style="font-style:normal;font-weight:normal;font-size:15.45750046px;line-height:1.25;font-family:sans-serif;fill:#000000;fill-opacity:1;stroke:none;stroke-width:0.64406401"
             x="236.20288"
             y="129.32944"
             id="text1649-7-55-8"><tspan
               id="tspan1647-8-2-3"
               x="236.20288"
               y="129.32944"
               style="font-size:15.45750046px;fill:#efeff0;fill-opacity:1;stroke-width:0.64406401">22</tspan></text>
    <text
             xml:space="preserve"
             style="font-style:normal;font-weight:normal;font-size:15.45750046px;line-height:1.25;font-family:sans-serif;fill:#000000;fill-opacity:1;stroke:none;stroke-width:0.64406401"
             x="258.22592"
             y="151.63849"
             id="text1649-7-55-1"><tspan
               id="tspan1647-8-2-8"
               x="258.22592"
               y="151.63849"
               style="font-size:15.45750046px;fill:#efeff0;fill-opacity:1;stroke-width:0.64406401">24</tspan><tspan
               id="tspan1777"
               x="258.22592"
               y="170.96036"
               style="font-size:15.45750046px;fill:#efeff0;fill-opacity:1;stroke-width:0.64406401" /></text>
    </g><circle
           r="113"
           cy="200.33299"
           cx="200.3335"
           id="path1035"
           style="fill:none;stroke:#111114;stroke-width:15;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" /><path
           d="M 200.33176,313.33124 A 113,113 0 0 1 95.93337,243.57447 113,113 0 0 1 120.42869,120.42817 113,113 0 0 1 243.57498,95.93285 113,113 0 0 1 313.33176,200.33124"
           id="path1035-3"
           style="fill:none;stroke:#ffcc00;stroke-width:15;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" /><circle
           r="2.8341856"
           cy="200.33299"
           cx="200.3335"
           id="path1086"
           style="fill:#d4d5d2;fill-opacity:1;stroke:#00cc00;stroke-width:0;stroke-linejoin:round;stroke-miterlimit:20;stroke-dasharray:none;stroke-opacity:1" /><g
           transform="matrix(2.2213481,0,0,2.2213481,-84.980003,-10.611928)"
           style="display:inline"
           id="airspeedIndicatorHand" /><g
           transform="matrix(2.2213481,0,0,2.2213481,-84.980003,-10.611928)"
           style="display:inline"
           id="airspeedIndicatorFg" /><g
           transform="matrix(2.2213481,0,0,2.2213481,-87.027151,-4.6115298)"
           style="display:inline"
           id="airspeedIndicatorBg"><path
             id="path4405-3-1-1-0"
             d="m 129.36205,20.035743 c -39.888259,7.1e-4 -72.223736,32.336308 -72.224456,72.224568 -3.6e-4,39.889019 32.335597,72.225879 72.224616,72.226599 39.88977,3.6e-4 72.22692,-32.3368 72.22655,-72.226558 -9e-4,-39.889012 -32.3377,-72.224969 -72.22671,-72.224609 z m 1.6e-4,7.82812 c 35.56579,-6.75e-4 64.39802,28.830699 64.39843,64.396489 4.5e-4,35.566548 -28.83187,64.399098 -64.39843,64.398438 -35.565789,-4.1e-4 -64.397156,-28.83265 -64.396486,-64.398438 4.1e-4,-35.56503 28.831467,-64.396079 64.396486,-64.396489 z"
             style="display:inline;opacity:1;fill:url(#radialGradient5742-9-3-3);fill-opacity:1;stroke:#000000;stroke-width:0.50000012;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1" /></g><rect
           rx="11.652015"
           ry="14.360746"
           y="237.64909"
           x="231.70129"
           height="79.335327"
           width="151.14796"
           id="value_rect"
           style="fill:url(#linearGradient1060-5);fill-opacity:1;stroke:url(#linearGradient1110-6);stroke-width:3;stroke-linejoin:round;stroke-miterlimit:20;stroke-dasharray:none;stroke-opacity:1" /><text
           y="-0.66717714"
           x="-67.694191"
           xml:space="preserve"
           style="font-style:normal;font-weight:normal;font-size:45px;line-height:1.25;font-family:sans-serif;text-align:end;white-space:pre;shape-inside:url(#rect1082-1);fill:#000000;fill-opacity:1;stroke:none"
           id="value"><tspan
             id="tspan136"
             y="293.26056"
             x="365.56949"><tspan
               id="value_content"
               style="text-align:end;text-anchor:end;fill:#d4d5d2;fill-opacity:1">0</tspan></tspan></text>
    <text
           xml:space="preserve"
           style="font-style:normal;font-weight:normal;font-size:21.33329964px;line-height:1.25;font-family:sans-serif;fill:#000000;fill-opacity:1;stroke:none"
           x="232.03249"
           y="229.08485"
           id="indicator_name"><tspan
             id="tspan1801"
             x="232.03249"
             y="229.08485"
             style="font-style:normal;font-variant:normal;font-weight:500;font-stretch:normal;font-size:21.33329964px;font-family:Ubuntu;-inkscape-font-specification:'Ubuntu Medium';fill:#5e5b5d;fill-opacity:1">AIRSPEED</tspan></text>
    </g>

    <path id="arc1" class="range_arc" fill="none" stroke="#446688" stroke-width="23" />


    <g
       transform="translate(200,200)"
       id="g979">
      <g
         id="gauge_arm">
        <path
           transform="matrix(1.9777324,0,0,1.9777324,-397.09246,-393.77054)"
           style="display:inline;fill:#000000;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:0.49999464;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1;filter:url(#filter9003)"
           d="m 200.83811,133.32008 c -0.24984,0 -0.41154,1.90492 -0.60547,3.89453 l -4.03906,57.03614 -0.74805,11.31055 c 0,0 -0.008,0.52451 0.15332,0.80762 0.14808,0.25999 0.43262,0.3252 0.43262,0.3252 h 9.61328 c 0,0 0.28454,-0.0652 0.43262,-0.3252 0.16129,-0.2831 0.15332,-0.80762 0.15332,-0.80762 l -0.74805,-11.31055 -4.03906,-57.03614 c -0.19395,-1.98961 -0.32864,-3.89453 -0.60547,-3.89453 z"
           id="path6414-4-9-5"
           inkscape:connector-curvature="0" />
        <g
           id="g17727-5"
           transform="matrix(1.9777112,0,0,1.9777112,-876.43537,-208.8688)"
           style="stroke:#333333;stroke-width:0.5;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1">
          <path
             id="path6414-4-9"
             d="m 438.56829,100.75971 -0.74825,11.3105 c 0,0 -0.007,0.52465 0.15415,0.80776 0.14808,0.25999 0.43208,0.32523 0.43208,0.32523 3.20453,0 6.40906,0 9.6136,0 0,0 0.28399,-0.0652 0.43207,-0.32523 0.16129,-0.2831 0.15415,-0.80776 0.15415,-0.80776 l -0.74825,-11.3105 -4.64477,5.27964 z"
             style="display:inline;fill:url(#radialGradient9305-9);fill-opacity:1;fill-rule:evenodd;stroke:#333333;stroke-width:0.37500408;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
             inkscape:connector-curvature="0" />
          <path
             id="path6414-8-9"
             d="m 443.21317,39.828168 c -0.24984,0 -0.41182,1.904899 -0.60575,3.894531 l -4.03906,57.037071 4.64453,5.27929 4.64453,-5.27929 -4.03906,-57.037071 c -0.19395,-1.989632 -0.32835,-3.894531 -0.60519,-3.894531 z"
             style="display:inline;fill:#ffffff;fill-rule:evenodd;stroke:#333333;stroke-width:0.37500408;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
             inkscape:connector-curvature="0" />
        </g>
      </g>
    </g>




</svg>`;

code = $($.parseHTML(code));

$(code).find('#arc1').attr("d", describeArc(400/2, 400/2, 110, 180+30, 180+200));
$(code).find('#arc1').attr("stroke", "green");
$(code).find('#gauge_arm').attr("transform", "rotate("+180+")");

/// document.getElementById("arc1").setAttribute("d", describeArc(200, 400, 100, 0, 180));


return code
}



(function($) {

    "use strict";

    function FlightIndicator( placeholder, type, options ) {

        var built = true,
        settings = $.extend({
            size : 400,
            showBox : false,
            showScrews : false,
            showIndicatorInner : true,
            airspeed : 0,
            trueairspeed: 0,
            rpm: 0,
            roll : 0,
            pitch : 0,
            off_flag: false,
            ils: true,
            ils_localizer: 0,
            ils_glideslope: 0,
            altitude : 0,
            pressure : 30,
            turn : 0,
            slip : 0.5,
            heading : 0,
            beaconone : 90,
            beacononeshow : false,
            beacontwo : 30,
            beacontwoshow : false,
            vario : 0,
            img_directory : 'img/'
            }, options
        ),
        constants = {
            pitch_bound: 26
        }

        // Air Speed - Set air speed
        function _setAirSpeed(speed){

            var deg = 0;

            if (speed >= -5 && speed < 1000) deg = 180 + speed * 9.55;
            // if (speed >= 40 && speed <= 160) deg = speed * 1.8 - 36;
            // if (speed > 70 && speed <= 160) deg = speed * 2 - 50;
            // if (speed > 160) deg = speed + 110;
            // if (speed > 200) deg = 311 + (speed % 2);
            //console.log(speed, deg);

            placeholder.each(function(){
                //console.log( $(this).find('#gauge_arm'));
                $(this).find('#gauge_arm').attr("transform", "rotate("+deg+")");
                $(this).find('#value_content').text(Math.round(speed));
            });
        }

        function _setAirSpeedRange(min, max){

            function _airspeed_angle(speed){
                var deg = 0;
                if (speed >= -5 && speed < 1000) deg = speed * 9.55;
                return deg
            }

            min = _airspeed_angle(min);
            max = _airspeed_angle(max);

            placeholder.each(function(){
               // $(this).find('div.instrument.airspeed div.airspeed .optimal_values').attr("display", "1");
               $(this).find('.range_arc').attr("d", describeArc(400/2, 400/2, 110, 180+min, 180+max));

           });
        }

        // RPM - Set rpm value
        function _setRPM(rpm){

            var deg = 0;

            if (rpm >= -5 && rpm < 600) deg = 180 + rpm * 0.09;
            if (rpm >= 600 && rpm < 1200) deg = 180 + 53.5 + (rpm-600) * 0.101 * 2;
            if (rpm >= 1200 && rpm < 2000) deg = 354.7 + (rpm-1200) * 0.101;
            // if (rpm >= 40 && rpm <= 160) deg = rpm * 1.8 - 36;
            // if (rpm > 70 && rpm <= 160) deg = rpm * 2 - 50;
            // if (rpm > 160) deg = rpm + 110;
            // if (rpm > 200) deg = 311 + (rpm % 2);

            //console.log(rpm, deg);

            placeholder.each(function(){
                $(this).find('div.instrument.rpm div.rpm')
                    .css('transform', 'rotate(' + deg + 'deg)');

            });

        }


        // Air Speed - Set true air speed
        function _setTrueAirSpeed(speed){
            // Make me work!
        }

        // Attitude - Set pitch
        function _setPitch(pitch){
            if(pitch>constants.pitch_bound) pitch = constants.pitch_bound;
            else if(pitch<-constants.pitch_bound) pitch = -constants.pitch_bound;
            placeholder.each(function(){
                $(this).find('div.instrument.attitude div.attitude div.attitude_pitch').css('transform', 'translateY(' + (pitch * 0.7) + '%)');
            });
        }

        // Attitude - Set roll
        function _setRoll(roll){
            placeholder.each(function(){
                $(this).find('div.instrument.attitude div.attitude').css('transform', 'rotate('+ roll +'deg)');
            });
        }

        // Attitude - Set visibility of the off flag
        function _setOffFlag(visible){
            placeholder.each(function(){
                $(this).find('div.instrument.attitude div.attitude_off_flag').toggle(visible);
            });
        }

        // Attitude - Instrument landing system - Set visibility
        function _setILS(visible){
        	placeholder.each(function(){
        		$(this).find('div.instrument.attitude div.attitude_ils').toggle(visible);
        	});
        }

		// Attitude - Instrument landing system - Set localizer angle
        function _setILSLocalizer(angle){

        	var ang = (Math.abs(angle) > 14.5) ? (Math.abs(angle) / angle) * 14.5 : angle;

        	placeholder.each(function(){
        		$(this).find('div.instrument.attitude div.attitude_ils_localizer').css({
        			'transform': 'rotate(' + ang + 'deg)',
        			'transform-origin': 'center top'
        		});
        	});
        }

		// Attitude - Instrument landing system - Set glideslope angle
        function _setILSGlideslope(angle){

        	var ang = (Math.abs(angle) > 14.5) ? (Math.abs(angle) / angle) * 14.5 : angle;

        	placeholder.each(function(){
        		$(this).find('div.instrument.attitude div.attitude_ils_glideslope').css({
        			'transform': 'rotate(' + ang + 'deg)',
        			'transform-origin': 'center left'
        		});
        	});
        }

        // Altimeter - Set altitude
        function _setAltitude(altitude){
            var hand100 = altitude / 1000 * 360;
            var hand1000 = altitude / 10000 * 360;
            var hand10000 = altitude / 100000 * 360;
            placeholder.each(function(){
                $(this).find('div.instrument.altimeter div.altimeter_hand100').css('transform', 'rotate(' + hand100 + 'deg)');
                $(this).find('div.instrument.altimeter div.altimeter_hand1000').css('transform', 'rotate(' + hand1000 + 'deg)');
                $(this).find('div.instrument.altimeter div.altimeter_hand10000').css('transform', 'rotate(' + hand10000 + 'deg)');
            });
        }

        // Altimeter - Set pressure (by default inHg; set milibar to true if you wish to use mbar)
        function _setPressure(pressure, milibar){

            var pressure1 = 0, pressure2 = 0;
            // pressure1: 5 units = 9 degrees
            // pressure2: 0.1 units = 6 degrees

            if (milibar !== true) {
                if (pressure >= 27.1 && pressure <= 33) {
                    pressure1 = (925 - 33.8639 * pressure) * 1.8;
                    pressure2 = (pressure - 27.1) * 60;
                }
            } else {
                if (pressure >= 925 && pressure <= 1120) {
                    pressure1 = (925 - pressure) * 1.8;
                    pressure2 = (pressure * 0.0295300 - 27.1) * 60;
                }
            }

            placeholder.each(function(){
                $(this).find('div.instrument.altimeter div.altimeter_pressurembar').css('transform', 'rotate(' + pressure1 + 'deg)');
            });
            placeholder.each(function(){
                $(this).find('div.instrument.altimeter div.altimeter_pressureinhg').css('transform', 'rotate(' + -pressure2 + 'deg)');
            });

        }

        // Turn Coordinator - Load SVG path along which the slip/skid ball moves
        function _loadBallPath() {

            if (typeof(d3) != 'undefined') {

                // If running directly from the file, this will fail in Chrome due to security reasons
                try {
                    placeholder.each(function(){
                        var i = this;
                        d3.xml(settings.img_directory + "turn_ball_path.svg", "image/svg+xml", function(xml) {
                            $(i).find('div.instrument.turn div.turn_ball_path').append(xml.documentElement);
                        });
                    });

                // Inject SVG path via JS if the code above doesn't work
                } catch (err) {
                    //console.log("Unable to load turn_ball_path.svg. Injecting a path instead.");
                    placeholder.each(function(){
                        d3.select($(this).find('div.instrument.turn div.turn_ball_path')[0]).append("svg")
                            .attr("width", 400)
                            .attr("height", 400)
                            .attr("class", "box")
                            .append("path")
                                .attr("id", "move_path")
                                // This line must be updated if the path SVG file is altered
                                .attr("d", "m 126.04736,251.79367 c 32.2868,5.88557 51.30081,7.6955 74.28947,7.69341 22.93061,0.002 41.52108,-1.7986 73.61092,-7.64849");
                    });
                }

            } else console.log("Unable to find d3js. Will not animate slip ball.");

        }

        // Turn Coordinator - Set turn direction
        function _setTurn(turn) {
            placeholder.each(function(){
                $(this).find('div.instrument.turn div.turn_airplane')
                    .css('transform', 'rotate('+ turn +'deg)')
                    .css('transition', 'transform 0.2s linear');
            });
        }

        // Turn Coordinator - Set slip/skid factor
        function _setSlip(slip) {

            // Animate slip ball only if d3js is loaded
            if (typeof(d3) !== undefined) {
                placeholder.each(function(){
                    var path = $("#move_path")[0], pathLength;
                    if (path !== undefined) {
                        var scale = $(this).find('div.instrument.turn').width() / 400;
                        if (slip < 0) slip = 0;
                        else if (slip > 1) slip = 1;
                        var pos = path.getPointAtLength( path.getTotalLength() * slip );
                        $(this).find('div.instrument.turn div.turn_ball')
                                    .css('transform', 'translate(' + (pos.x - 200) * scale + 'px, ' + (pos.y - 260) * scale + 'px)')
                                    .css('transition', 'transform 0.5s linear');
                    }
                });
            }

        }

        // Heading - Set heading
        function _setHeading(heading){
            placeholder.each(function(){
                $(this).find('div.instrument.heading div.heading_yaw').css('transform', 'rotate(' + -heading + 'deg)');
            });
        }

        // Heading - Set beacon one direction
        function _setBeaconOne(heading, visible){
            if (visible) placeholder.each(function(){
                $(this).find('div.instrument.heading div.heading_beacon_1').show().css('transform', 'rotate(' + heading + 'deg)');
            });
            else placeholder.each(function(){
                $(this).find('div.instrument.heading div.heading_beacon_1').hide();
            });
        }

        // Heading - Set beacon two direction
        function _setBeaconTwo(heading, visible){
            if (visible) placeholder.each(function(){
                $(this).find('div.instrument.heading div.heading_beacon_2').show().css('transform', 'rotate(' + heading + 'deg)');
            });
            else placeholder.each(function(){
                $(this).find('div.instrument.heading div.heading_beacon_2').hide();
            });
        }

        // Variometer - Set vertical speed
        function _setVario(vario){

            var deg = Math.sign(vario) * Math.min(Math.abs(vario), 20) * 8.2;
            if (vario > 20 || vario < - 20) deg += vario % 2;

            placeholder.each(function(){
                $(this).find('div.instrument.vario div.vario_hand')
                    .css('transform', 'rotate(' + deg + 'deg)')
                    .css('transition', 'transform 1.0s linear');

            });
        }

        // Set size of instrument
        function _resize(size){
            var sz = (size < 100) ? sz = 100 : sz = size;
            placeholder.each(function(){
                $(this).find('div.instrument').css({height : sz, width : sz});
            });
        }

        // Toggle background box for instrument
        function _toggleBox(toggle){
            placeholder.each(function(){
                $(this).find('.indicator_background').toggle(toggle);
            });
        }

        // Toggle dashboard screws for instrument
        function _toggleScrews(toggle){
            placeholder.each(function(){
                $(this).find('.indicator_background_screws').toggle(toggle);
            });
        }

        // Toggle inner indicator elements
        function _toggleIndicatorInner(toggle){
            placeholder.each(function(){
                $(this).find('.indicator_inner').toggle(toggle);
            });
        }

        // Creation of the instrument
        placeholder.each(function(){

            switch(type){

                case 'airspeed':
                    $(this).html(generate_airspeed_gauge(settings));
                    // $(this).html( '<div class="instrument airspeed"> <div class="indicator_background">' +
                    //                   '<img src="' + settings.img_directory + 'indicator_background_dashboard.svg" class="box" alt="" onload="SVGInject(this)" />' +
                    //               '</div>' +
                    //               '<div class="indicator_background_screws">'+
                    //                   '<img src="' + settings.img_directory + 'indicator_background_screws.svg" class="box" alt="" onload="SVGInject(this)" />' +
                    //               '</div>' +
                    //               '<div class="indicator_inner">' +
                    //                   '<div class="airspeed_trueairspeed">' +
                    //                       '<img src="' + settings.img_directory + 'airspeed_trueairspeed.svg" class="box" alt="" onload="SVGInject(this)" />' +
                    //                   '</div>' +
                    //                   '<div class="airspeed_markings">' +
                    //                       '<img src="' + settings.img_directory + 'airspeed_markings.svg" class="box" alt="" onload="SVGInject(this)" />' +
                    //                   '</div>' +
                    //                   '<div class="airspeed box">' +
                    //                       '<img src="' + settings.img_directory + 'airspeed_hand.svg" class="box" alt=""  onload="SVGInject(this)"/>' +
                    //                   '</div>' +
                    //               '</div>' +
                    //               '<div class="indicator_foreground">' +
                    //                   '<img src="' + settings.img_directory + 'indicator_foreground.svg" class="box" alt="" onload="SVGInject(this)" />'+
                    //               '</div>'+
                    //               '</div>');
                    _setAirSpeed(settings.airspeed);
                    _setTrueAirSpeed(settings.trueairspeed);
                break

                case 'rpm':
                    $(this).html('<div class="instrument rpm"><div class="indicator_background"><img src="' + settings.img_directory + 'indicator_background_dashboard.svg" class="box" alt="" /></div><div class="indicator_background_screws"><img src="' + settings.img_directory + 'indicator_background_screws.svg" class="box" alt="" /></div><div class="indicator_inner"><div class="airspeed_trueairspeed"><img src="' + settings.img_directory + 'airspeed_trueairspeed.svg" class="box" alt="" /></div><div class="rpm_markings"><img src="' + settings.img_directory + 'rpm_markings.svg" class="box" alt="" /></div><div class="rpm box"><img src="' + settings.img_directory + 'rpm_hand.svg" class="box" alt="" /></div></div><div class="indicator_foreground"><img src="' + settings.img_directory + 'indicator_foreground.svg" class="box" alt="" /></div></div>');
                    _setRPM(settings.rpm);
                    //_setTrueAirSpeed(settings.trueairspeed);
                break

                case 'attitude':
                    $(this).html('<div class="instrument attitude"><div class="indicator_background"><img src="' + settings.img_directory + 'indicator_background_dashboard.svg" class="box" alt="" /></div><div class="indicator_background_screws"><img src="' + settings.img_directory + 'indicator_background_screws.svg" class="box" alt="" /></div><div class="indicator_inner"><div class="attitude box"><img src="' + settings.img_directory + 'attitude_roll_1.svg" class="box" alt="" /><div class="attitude_pitch box"><img src="' + settings.img_directory + 'attitude_pitch.svg" class="box" alt="" /></div><img src="' + settings.img_directory + 'attitude_roll_2.svg" class="box" alt="" /></div><div class="attitude_foreground_1"><img src="' + settings.img_directory + 'attitude_foreground_1.svg" class="box" alt="" /></div><div class="attitude_ils"><img src="' + settings.img_directory + 'attitude_ils_markings.svg" class="box" alt="" /><div class="attitude_ils_localizer box"><img src="' + settings.img_directory + 'attitude_ils_localizer.svg" class="box" alt="" /></div><div class="attitude_ils_glideslope box"><img src="' + settings.img_directory + 'attitude_ils_glideslope.svg" class="box" alt="" /></div></div><div class="attitude_foreground_2"><img src="' + settings.img_directory + 'attitude_foreground_2.svg" class="box" alt="" /></div><div class="attitude_off_flag"><img src="' + settings.img_directory + 'attitude_off_flag.svg" class="box" alt="" /></div></div><div class="indicator_foreground"><img src="' + settings.img_directory + 'indicator_foreground.svg" class="box" alt="" /></div></div>');
                    _setRoll(settings.roll);
                    _setPitch(settings.pitch);
                    _setOffFlag(settings.off_flag);
                    _setILS(settings.ils);
                    _setILSLocalizer(settings.ils_localizer);
                    _setILSGlideslope(settings.ils_glideslope);
                break

                case 'altimeter':
                    $(this).html('<div class="instrument altimeter"><div class="indicator_background"><img src="' + settings.img_directory + 'indicator_background_dashboard.svg" class="box" alt="" /></div><div class="indicator_background_screws"><img src="' + settings.img_directory + 'indicator_background_screws.svg" class="box" alt="" /></div><div class="indicator_inner"><div class="altimeter_pressureinhg box"><img src="' + settings.img_directory + 'altimeter_pressure_inhg.svg" class="box" alt="" /></div><div class="altimeter_pressurembar box"><img src="' + settings.img_directory + 'altimeter_pressure_mbar.svg" class="box" alt="" /></div><div class="altimeter_background box"><img src="' + settings.img_directory + 'altimeter_background.svg" class="box" alt="" /></div><div class="altimeter_hand10000 box"><img src="' + settings.img_directory + 'altimeter_hand_10000ft.svg" class="box" alt="" /></div><div class="altimeter_foreground box"><img src="' + settings.img_directory + 'altimeter_foreground.svg" class="box" alt="" /></div><div class="altimeter_hand1000 box"><img src="' + settings.img_directory + 'altimeter_hand_1000ft.svg" class="box" alt="" /></div><div class="altimeter_hand100 box"><img src="' + settings.img_directory + 'altimeter_hand_100ft.svg" class="box" alt="" /></div></div><div class="indicator_foreground"><img src="' + settings.img_directory + 'indicator_foreground.svg" class="box" alt="" /></div></div>');
                    _setAltitude(settings.altitude);
                    _setPressure(settings.pressure);
                break;

                case 'turn_coordinator':
                    $(this).html('<div class="instrument turn"><div class="indicator_background"><img src="' + settings.img_directory + 'indicator_background_dashboard.svg" class="box" alt="" /></div><div class="indicator_background_screws"><img src="' + settings.img_directory + 'indicator_background_screws.svg" class="box" alt="" /></div><div class="indicator_inner"><div class="turn_markings_1 box"><img src="' + settings.img_directory + 'turn_markings_1.svg" class="box" alt="" /></div><div class="turn_ball_path box" hidden></div><div class="turn_ball box"><img src="' + settings.img_directory + 'turn_ball.svg" class="box" alt="" /></div><div class="turn_airplane box"><img src="' + settings.img_directory + 'turn_airplane.svg" class="box" alt="" /></div><div class="turn_markings_2 box"><img src="' + settings.img_directory + 'turn_markings_2.svg" class="box" alt="" /></div></div><div class="indicator_foreground"><img src="' + settings.img_directory + 'indicator_foreground.svg" class="box" alt="" /></div></div>');
                    _loadBallPath();
                    _setTurn(settings.turn);
                    _setSlip(settings.slip);
                break;

                case 'heading':-
                    $(this).html('<div class="instrument heading"><div class="indicator_background"><img src="' + settings.img_directory + 'indicator_background_dashboard.svg" class="box" alt="" /></div><div class="indicator_background_screws"><img src="' + settings.img_directory + 'indicator_background_screws.svg" class="box" alt="" /></div><div class="indicator_inner"><div class="heading_background box"><img src="' + settings.img_directory + 'heading_background.svg" class="box" alt="" /></div><div class="heading_yaw box"><img src="' + settings.img_directory + 'heading_yaw.svg" class="box" alt="" /></div><div class="heading_beacon_2 box"><img src="' + settings.img_directory + 'heading_beacon_2.svg" class="box" alt="" /></div><div class="heading_beacon_1 box"><img src="' + settings.img_directory + 'heading_beacon_1.svg" class="box" alt="" /></div><div class="heading_markings box"><img src="' + settings.img_directory + 'heading_markings.svg" class="box" alt="" /></div></div><div class="indicator_foreground"><img src="' + settings.img_directory + 'indicator_foreground.svg" class="box" alt="" /></div></div>');
                    _setHeading(settings.heading);
                    _setBeaconTwo(settings.beacontwo, settings.beacontwoshow);
                    _setBeaconOne(settings.beaconone, settings.beacononeshow);
                break;

                case 'variometer':
                    $(this).html('<div class="instrument vario"><div class="indicator_background"><img src="' + settings.img_directory + 'indicator_background_dashboard.svg" class="box" alt="" /></div><div class="indicator_background_screws"><img src="' + settings.img_directory + 'indicator_background_screws.svg" class="box" alt="" /></div><div class="indicator_inner"><div class="vario_markings"><img src="' + settings.img_directory + 'vario_markings.svg" class="box" alt="" /></div><div class="vario_hand box"><img src="' + settings.img_directory + 'vario_hand.svg" class="box" alt="" /></div></div><div class="indicator_foreground"><img src="' + settings.img_directory + 'indicator_foreground.svg" class="box" alt="" /></div></div>');
                    _setVario(settings.vario);
                break;

                default:
                    built = false;
                    console.log("No instrument built.");

            }

            _resize(settings.size);
            _toggleBox(settings.showBox);
            _toggleScrews(settings.showScrews);
            _toggleIndicatorInner(settings.showIndicatorInner);

        });

        // Public methods
        this.setAirSpeed = function(speed){_setAirSpeed(speed);}
        this.setTrueAirSpeed = function(speed){_setTrueAirSpeed(speed);}
        this.setAirSpeedRange = function(min, max){_setAirSpeedRange(min, max);}
        this.setRoll = function(roll){_setRoll(roll);}
        this.setRPM = function(rpm){_setRPM(rpm);}
        this.setPitch = function(pitch){_setPitch(pitch);}
        this.setOffFlag = function(visible){_setOffFlag(visible);}
        this.setILS = function(visible){_setILS(visible);}
        this.setILSLocalizer = function(angle){_setILSLocalizer(angle);}
        this.setILSGlideslope = function(angle){_setILSGlideslope(angle);}
        this.setAltitude = function(altitude){_setAltitude(altitude);}
        this.setPressure = function(pressure, milibar){_setPressure(pressure, milibar);}
        this.setTurn = function(turn){_setTurn(turn);}
        this.setSlip = function(slip){_setSlip(slip);}
        this.setHeading = function(heading){_setHeading(heading);}
        this.setBeaconOne = function(heading, visible){_setBeaconOne(heading, visible);}
        this.setBeaconTwo = function(heading, visible){_setBeaconTwo(heading, visible);}
        this.setVario = function(vario){_setVario(vario);}
        this.resize = function(size){_resize(size);}
        this.toggleBox = function(toggle){_toggleBox(toggle);}
        this.toggleScrews = function(toggle){_toggleScrews(toggle);}
        this.toggleIndicatorInner = function(toggle){_toggleIndicatorInner(toggle);}

        return built;
    };

    // Extension to jQuery
    $.flightIndicator = function(placeholder, type, options){
        var flightIndicator = new FlightIndicator($(placeholder), type, options);
        return flightIndicator;
    };

    $.fn.flightIndicator = function(data, type, options){
        return this.each(function(){
            $.flightIndicator(this, type, options);
        });
    };

}( jQuery ));
