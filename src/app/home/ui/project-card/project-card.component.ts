import { Component, Input } from "@angular/core";
import { CommonModule } from "@angular/common";

type Project = {
   id: number
}

@Component({
   selector: "app-project-card",
   standalone: true,
   imports: [CommonModule],
   template: `
   <div class="project-card">
      {{project.id}}
   </div>
`,
   styleUrl: "./project-card.component.scss",
})
export class ProjectCardComponent { 
   @Input() public project!: Project;
}
