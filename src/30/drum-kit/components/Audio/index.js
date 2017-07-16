import React from 'react';
import {map} from 'ramda';

const tracks = [{dataKey: '65', source: 'sounds/clap.wav'}];

function makeAudio(a) {
  return <Audio data-key={a.dataKey} src={a.source} />;
}

const Audio = () => (
  <div>
    {map(tracks, makeAudio)}
  </div>
);
//  <audio data-key="65" src="sounds/clap.wav" />
//     <audio data-key="83" src="sounds/hihat.wav" />
//     <audio data-key="68" src="sounds/kick.wav" />
//     <audio data-key="70" src="sounds/openhat.wav" />
//     <audio data-key="71" src="sounds/boom.wav" />
//     <audio data-key="72" src="sounds/ride.wav" />
//     <audio data-key="74" src="sounds/snare.wav" />
//     <audio data-key="75" src="sounds/tom.wav" />
//     <audio data-key="76" src="sounds/tink.wav" />
