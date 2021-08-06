<template>
<div class="tooltip" :data-tooltip="dataText" :data-flow="flowSelector">
    <div class="tooltip-box">?</div>
</div>
</template>

<script>
import tooltipText from './../data/tooltip-text.json'

export default {
    props: {
        tooltiptSelector: String,
        flowSelector: String
    },

    data() {
        return {
            dataText: tooltipText[this.tooltiptSelector].data
        }
    }
}
</script>

<style>
.tooltip {
    position: relative;
    font-family: 'Roboto', sans-serif;
    background: transparent;
    width: 30px;
}
[data-tooltip] {
  position: relative;
  cursor: pointer;
}
[data-tooltip]:before,
[data-tooltip]:after {
  line-height: 1;
  font-size: .9em;
  pointer-events: none;
  position: absolute;
  box-sizing: border-box;
  display: none;
  opacity: 0;
}
[data-tooltip]:before {
  content: "";
  border: 10px solid transparent;
  z-index: 100;
}
[data-tooltip]:after {
  content: attr(data-tooltip);
  text-align: center;
  width: 200px;
  min-height: 40px;
  max-height: 60px;
  padding: 8px;
  border-radius: 8px;
  background: #E8E8E8;
  color: #000000;
  font-weight: 500;
  z-index: 99;
}
[data-tooltip]:hover:before,
[data-tooltip]:hover:after {
  display: block;
  opacity: 1;
}
[data-tooltip]:not([data-flow])::before,
[data-tooltip][data-flow="top"]::before {
  bottom: 100%;
  border-bottom-width: 0;
  border-top-color: #E8E8E8;
}
[data-tooltip]:not([data-flow])::after,
[data-tooltip][data-flow="top"]::after {
  bottom: calc(100% + 10px);
}
[data-tooltip]:not([data-flow])::before,
[tooltip]:not([data-flow])::after,
[data-tooltip][data-flow="top"]::before,
[data-tooltip][data-flow="top"]::after {
  left: 50%;
  -webkit-transform: translate(-50%, -4px);
          transform: translate(-50%, -4px);
}
[data-tooltip][data-flow="bottom"]::before {
  top: 100%;
  border-top-width: 0;
  border-bottom-color: #E8E8E8;
}
[data-tooltip][data-flow="bottom"]::after {
  top: calc(100% + 10px);
}
[data-tooltip][data-flow="bottom"]::before, [data-tooltip][data-flow="bottom"]::after {
  left: 50%;
  -webkit-transform: translate(-50%, 8px);
          transform: translate(-50%, 8px);
}
[data-tooltip][data-flow="left"]::before {
  top: 50%;
  border-right-width: 0;
  border-left-color: #E8E8E8;
  left: calc(0em - 10px);
  -webkit-transform: translate(-8px, -50%);
          transform: translate(-8px, -50%);
}
[data-tooltip][data-flow="left"]::after {
  top: 50%;
  right: calc(100% + 5px);
  -webkit-transform: translate(-8px, -50%);
          transform: translate(-8px, -50%);
}
[data-tooltip][data-flow="right"]::before {
  top: 50%;
  border-left-width: 0;
  border-right-color: #E8E8E8;
  right: calc(0em - 5px);
  -webkit-transform: translate(8px, -50%);
          transform: translate(8px, -50%);
}
[data-tooltip][data-flow="right"]::after {
  top: 50%;
  left: calc(100% + 5px);
  -webkit-transform: translate(8px, -50%);
          transform: translate(8px, -50%);
}
[data-tooltip=""]::after, [data-tooltip=""]::before {
  display: none !important;
}

.tooltip-box {
    font-weight: bold;
    cursor: pointer;
    margin: 0 auto;
    color: white;
    width: 1.25rem;
    height: 1.25rem;
    border-radius: .25rem;
    font-size: 0.875rem;
    line-height: 1.25rem;
    text-align: center;
    background: rgba(94, 140, 240, 0.6);
}
</style>
