import React from 'react';
import { View } from 'react-native';
import Svg, { Path } from 'react-native-svg';


export default function WavyHeader({ customStyles }) {
    return (
      <View style={customStyles}>
        <View style={{ backgroundColor: '#F6F6F4', height: 160 }}>
          <Svg
            height="100%"
            width="100%"
            viewBox="0 0 390 104"
            fill="none" 
            style={{ position: 'absolute', top: -30 }}
          >
            <Path
              fill-rule="evenodd" 
              clip-rule="evenodd" 
              d="M0 44.3988L20.6667 42.2988C41.3333 40.1989 82.6667 35.999 124 46.4987C165.333 56.9985 206.667 82.1979 248 94.7976C289.333 107.397 330.667 107.397 372 92.6976C377.853 90.6161 384.206 88.0875 390 85.5C390 61.8477 390 49.5 390 34.5V28V18V7V0L383.5 4.76837e-07C362.833 4.76837e-07 413.333 0 372 0C330.667 0 289.333 0 248 0C206.667 0 165.333 0 124 0C82.6667 0 41.3333 0 20.6667 0H0V44.3988Z" 
              fill="#FFAE42"
            />
          </Svg>
        </View>
      </View>
    );
  }