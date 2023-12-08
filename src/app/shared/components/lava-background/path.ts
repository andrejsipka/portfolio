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

export class Path {
   public root: Root[];
   public counter: number = 200;

   constructor(public ctx: any, public y: number, public color: string, public componentView: ComponentView, public settings: BackgroundSettings) {
      this.y = y;
      this.color = color;
      this.root = [];
      this.create();
      this.draw();
   }

   create() {
      // generate path
      let rootX = 0;
      let rootY = this.y;
      this.root = [{ x: rootX, y: rootY }];

      while (rootX < this.componentView.width) {
         let delay = Math.random() * 100;
         let casual = Math.random() > 0.5 ? 1 : -1;
         
         let x = this.settings.amplitudeX / 2 + Math.random() * this.settings.amplitudeX / 2;
         let y = rootY + casual * (this.settings.amplitudeY / 2 + Math.random() * this.settings.amplitudeY / 2);
         rootX += x;

         this.root.push({
            x: rootX,
            y: y,
            height: rootY,
            casual: casual,
            delay: delay
         });
      }
   }

   draw() {
      this.counter = this.counter + 1;
   
      this.ctx.beginPath();
      // Set position beginning position
      this.ctx.moveTo(0, this.componentView.height);
      this.ctx.lineTo(this.root[0].x, this.root[0].y);

      // Loop over each position
      for (let i = 1; i < this.root.length - 1; i++) {
         let newX = (this.root[i].x + this.root[i + 1].x) / 2;
         let newY = (this.root[i].y + this.root[i + 1].y) / 2;
         
         this.ctx.quadraticCurveTo(this.root[i].x, this.root[i].y, newX, newY);
      }

      const lastPoint = this.root.reverse()[0];
      const reversed = this.root.reverse();
      this.root = reversed;

      this.ctx.lineTo(lastPoint.x, lastPoint.y);
      this.ctx.lineTo(this.componentView.width, this.componentView.height);
      this.ctx.fillStyle = this.color;
      this.ctx.fill();
      this.ctx.closePath();
   }
}
