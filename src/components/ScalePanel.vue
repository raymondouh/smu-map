<template>
<div class="scale-panel">
    <div class="input-range-scale">
        <div class="scale-ico sign-minus">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M12.5 11H11.71L11.43 10.73C12.41 9.59 13 8.11 13 6.5C13 4.77609 12.3152 3.12279 11.0962 1.90381C9.87721 0.684819 8.22391 0 6.5 0C4.77609 0 3.12279 0.684819 1.90381 1.90381C0.684819 3.12279 0 4.77609 0 6.5C0 8.22391 0.684819 9.87721 1.90381 11.0962C3.12279 12.3152 4.77609 13 6.5 13C8.11 13 9.59 12.41 10.73 11.43L11 11.71V12.5L16 17.5L17.5 16L12.5 11ZM6.5 11C4 11 2 9 2 6.5C2 4 4 2 6.5 2C9 2 11 4 11 6.5C11 9 9 11 6.5 11ZM4 6H9V7H4V6Z"
                    fill="#9C9C9C" />
            </svg>
        </div>
        <div class="scale-input-body">
            <div class="scale-input">
                <input type="range" class="input-range" min="1" max="100" value="50">
            </div>
            <div class="scale-grid">
                <div class="scale-track"></div>
                <div class="scale-marks">
                    <div class="scale-mark">
                        <div class="hatch"></div>
                        <div class="mark-value">
                            0%
                        </div>
                    </div>
                    <div class="scale-mark">
                        <div class="hatch"></div>
                        <div class="mark-value">
                            50%
                        </div>
                    </div>
                    <div class="scale-mark">
                        <div class="hatch"></div>
                        <div class="mark-value">
                            100%
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="scale-ico sign-plus">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M12.5 11L17.5 16L16 17.5L11 12.5V11.71L10.73 11.43C9.59 12.41 8.11 13 6.5 13C4.77609 13 3.12279 12.3152 1.90381 11.0962C0.684819 9.87721 0 8.22391 0 6.5C0 4.77609 0.684819 3.12279 1.90381 1.90381C3.12279 0.684819 4.77609 0 6.5 0C8.22391 0 9.87721 0.684819 11.0962 1.90381C12.3152 3.12279 13 4.77609 13 6.5C13 8.11 12.41 9.59 11.43 10.73L11.71 11H12.5ZM6.5 11C9 11 11 9 11 6.5C11 4 9 2 6.5 2C4 2 2 4 2 6.5C2 9 4 11 6.5 11ZM9 7H7V9H6V7H4V6H6V4H7V6H9V7Z"
                    fill="#9C9C9C" />
            </svg>
        </div>
        <tooltip :tooltiptSelector="'scale-tooltip'" :flowSelector="'top'"></tooltip>
    </div>
</div>
</template>

<script>
import tooltip from "./Tooltip"
export default {
    components: {
        tooltip
    }
};
</script>

<style lang="less" scoped>
.scale-panel {
    position: absolute;
    bottom: 5%;

    display: flex;
    align-items: center;
    justify-content: center;
    width: 20%;
}
.input-range-scale {
    font-size: 1rem;
    line-height: 1.1875rem;
    font-weight: 300;
    letter-spacing: 0.045em;
    color: #9C9C9C;
    padding: 10px;
    width: 100%;
    display: flex;
    justify-content: space-between;
}

.scale-ico {
    margin-top: 10px;
    height: 20px;
    flex-basis: 20px;
    flex-shrink: 0;
    flex-grow: 0;
}

.sign-minus {
    margin-right: 5px;
}

.sign-plus {
    margin-left: 5px;
}

.scale-input-body {
    flex: 1 1 300px;
}

.scale-input,
.scale-input-body input[type="range"],
.scale-grid,
.scale-track {
    width: 100%;
}

.scale-track {
    height: 2px;
    background: #9C9C9C;
}

.scale-marks {
    margin-top: -1px;
    display: flex;
    justify-content: space-between;
}

.scale-mark {
    position: relative;
    width: 40px;
}

.scale-mark:nth-last-child(1) {
    left: 20px;
}

.scale-mark:nth-last-child(2) {
    left: -1px;
}

.scale-mark:nth-last-child(3) {
    left: -20px;
}

.hatch {
    margin: 0 auto;
    width: 8px;
    height: 1px;
    background: #9C9C9C;
    transform: rotate(90deg);
}

.mark-value {
    margin-top: 5px;
    text-align: center;
}

.input-range {
    margin: 0;
    height: 2px;
    appearance: none;
    -webkit-appearance: none;
    margin: 10px 0;
    width: 100%;
}

.input-range::-moz-range-track {
    cursor: pointer;
}

.input-range::-webkit-slider-thumb {
    border: 0;
    outline: none;
    border-radius: 0;
    height: 15px;
    width: 10px;
    background-color: transparent;
    background: url("data:image/svg+xml,<svg width='10' height='15' viewBox='0 0 10 15' xmlns='http://www.w3.org/2000/svg' xmlns:svg='http://www.w3.org/2000/svg'><g><path style='fill:%233C9FE5;' d='M 2.4885893,12.554546 0.0221249,10.131217 V 5.0766709 0.0221249 H 5 9.9778751 v 5.0329106 5.0329105 l -2.4890858,2.444965 c -1.3689969,1.344731 -2.4991317,2.444964 -2.5114108,2.444964 -0.012279,0 -1.1322337,-1.090498 -2.4887892,-2.423329 z'/><path style='fill:none;stroke:%23ffffff;stroke-width:1px;' d='m 8,2.5 c -6,0 -6,0 -6,0'/><path style='fill:none;stroke:%23ffffff;stroke-width:1px;' d='m 8.0,5.5 c -6,0 -6,0 -6,0'/><path style='fill:none;stroke:%23ffffff;stroke-width:1px;' d='m 8,8.5 c -6,0 -6,0 -6,0'/></g></svg>");
    cursor: pointer;
    -webkit-appearance: none;
}

.input-range::-moz-range-thumb {
    border: 0;
    outline: none;
    border-radius: 0;
    height: 15px;
    width: 10px;
    background-color: transparent;
    background: url("data:image/svg+xml,<svg width='10' height='15' viewBox='0 0 10 15' xmlns='http://www.w3.org/2000/svg' xmlns:svg='http://www.w3.org/2000/svg'><g><path style='fill:%233C9FE5;' d='M 2.4885893,12.554546 0.0221249,10.131217 V 5.0766709 0.0221249 H 5 9.9778751 v 5.0329106 5.0329105 l -2.4890858,2.444965 c -1.3689969,1.344731 -2.4991317,2.444964 -2.5114108,2.444964 -0.012279,0 -1.1322337,-1.090498 -2.4887892,-2.423329 z'/><path style='fill:none;stroke:%23ffffff;stroke-width:1px;' d='m 8,2.5 c -6,0 -6,0 -6,0'/><path style='fill:none;stroke:%23ffffff;stroke-width:1px;' d='m 8.0,5.5 c -6,0 -6,0 -6,0'/><path style='fill:none;stroke:%23ffffff;stroke-width:1px;' d='m 8,8.5 c -6,0 -6,0 -6,0'/></g></svg>");
    cursor: pointer;
    -webkit-appearance: none;
}
</style>
