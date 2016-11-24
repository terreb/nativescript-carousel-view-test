import { ITemplateSelector } from "nativescript-carousel-view";
import { topmost } from 'ui/frame'
import builder = require("ui/builder");

export class MyTemplateSelector implements ITemplateSelector {
    
    OnSelectTemplate(position: number, bindingContext: any) {

        const page = topmost().currentPage

        var view = builder.load({
            path: "~/Views/Slides",
            name: "slider-view",
            //page: page
        });

        view.bindingContext = bindingContext;

        return view;
    }
}