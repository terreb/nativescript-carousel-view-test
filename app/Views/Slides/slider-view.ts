import { EventData } from "data/observable";
var frame = require('ui/frame');
import { CarouselView } from "nativescript-carousel-view";

export async function buttonTap(args: EventData) {    
    var page = frame.topmost().currentPage;
    var slider = <CarouselView>page.getViewById("carouselView");
    await slider.removePage(slider.position);
}

export function onLoaded(args) {
    console.log('slide loaded')
}

export function test() {
    console.log('TEST')
}