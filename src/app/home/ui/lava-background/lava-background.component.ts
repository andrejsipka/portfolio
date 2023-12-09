import { Component, ViewChild, AfterViewInit, inject, ElementRef, HostListener } from "@angular/core";
import { CommonModule, DOCUMENT } from "@angular/common";
import chroma from "chroma-js";
import { Path } from "./path";
import { Observable, fromEvent } from "rxjs";
import { debounceTime, tap } from 'rxjs/operators';

type BackgroundSettings = {
   amplitudeX: number,
   amplitudeY: number,
   lines: number,
   startColor: string,
   endColor: string
}

type ComponentView = {
   width: number,
   height: number
}

type Root = {
   x: number,
   y: number,
   height?: number,
   casual?: any,
   delay?: any
}

@Component({
   selector: "app-lava-background",
   standalone: true,
   imports: [CommonModule],
   template: `
      <div #bgContainerRef class="lava-background">
         <canvas #canvasRef></canvas>
      </div>
   `,
   styleUrl: "./lava-background.component.scss",
})
export class LavaBackgroundComponent implements AfterViewInit {
   private readonly document: Document = inject(DOCUMENT);

   private $resize: Observable<Event> = fromEvent(this.document, 'resize');

   /**
    * variableName!: ... -> explanation
    * All uninitialized fields will have a default value of undefined, so this will result in an error Property 'bgContainerRef' has no initializer and is not definitely assigned in constructor
    */
   @ViewChild('bgContainerRef') private bgContainerRef!: ElementRef<HTMLDivElement>;
   @ViewChild('canvasRef') private canvasRef!: ElementRef<HTMLCanvasElement>;

   public settings: BackgroundSettings = {
      amplitudeX: 100,
      amplitudeY: 7,
      lines: 17,
      startColor: '#222222',
      endColor: '#EB5E28',
   }

   public componentView: ComponentView = {
      width: 0,
      height: 0,
   }

   public ctx!: CanvasRenderingContext2D | null;


   // #Todo: Need code refactor. Variables are not named correctly
   public paths: any[] = [];
   public color: string[] = [];
   public time: number = 0;
   public curves: number = 0;
   public velocity: number = 0;
   public root: Root[] = [];
   public y: number = 5;
   public count: number = 0;

   public animationLoop: any;

   @HostListener('window:resize', ['$event'])private onResize(event: any ) {
      this.componentView.width = this.bgContainerRef.nativeElement.clientWidth;
      this.canvasRef.nativeElement.width = this.componentView.width;

      this.document.defaultView?.window.cancelAnimationFrame(this.animationLoop);
      this.animationLoop = undefined;

      this.initState();
      // this.render();
   }

   public ngAfterViewInit(): void {
      this.ctx = this.canvasRef.nativeElement.getContext('2d'); // Getting ERROR Error: NotYetImplemented from the builder

      this.initState();
      // this.render();
   }

   public initState(): void {
      // Init method to set the canvas to correct settings
      this.canvasRef.nativeElement.width = this.bgContainerRef.nativeElement.clientWidth;
      this.canvasRef.nativeElement.height = this.bgContainerRef.nativeElement.clientHeight;

      this.componentView = {
         width: this.bgContainerRef.nativeElement.clientWidth,
         height: this.bgContainerRef.nativeElement.clientHeight
      }

      this.paths = [];

      this.color = chroma.scale([this.settings.startColor, this.settings.endColor])
         .mode('lch')
         .colors(this.settings.lines);

      this.bgContainerRef.nativeElement.style.background = this.settings.startColor;

      // Generate new paths and its coordinations
      for (let index = 0; index < this.settings.lines; index++) {
         this.paths.push(new Path(this.ctx, this.componentView.height / this.settings.lines * index, this.color[index], this.componentView, this.settings))
      }
   }

   /**
    * Doesn't work at all
    * Getting ERROR Error: NotYetImplemented from the builder
    * Waves doesn't update their directions. Need to spent more time to understand the flow and
    * how to work with the canvas
    */
   // public render(): void {
   //    if (!this.canvasRef) {
   //       return;
   //    }

   //    this.velocity = 0.3;
   //    this.time = 0.005;
   //    this.curves = 2;

   //    this.paths.forEach((path: Path, i: number) => {
   //       path.root.forEach((r: Root, j: any) => {
   //          if (j % this.curves == 1) {
   //             let move = Math.sin(this.time + r.delay) * this.velocity * r.casual;
   //             r.y -= (move / 2) - move;
   //          }
   //          if (j + 1 % this.curves == 0) {
   //             let move = Math.sin(this.time + r.delay) * this.velocity * r.casual;
   //             r.x += (move / 2) - move / 10;
   //          }
   //       });

   //       path.draw();
   //    });


   //  this.animationLoop = this.document.defaultView?.window.requestAnimationFrame(() => this.render());
   // }
}

