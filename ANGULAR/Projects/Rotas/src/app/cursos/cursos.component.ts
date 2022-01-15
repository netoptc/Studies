import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CursosService } from './cursos.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  idcurso:number = 0;
  pagina: number = 1;
  cursos: any[] = [];
  

  constructor(
    private _cursosService: CursosService,
    private _route: ActivatedRoute,
    private _router: Router
  ){ }



  proximaPagina(){
  
    this._router.navigate(['/cursos'], {queryParams: {'pagina': ++this.pagina}});
  }

  ngOnInit(): void {
     this.cursos = this._cursosService.getCursos();

     this._route.queryParams.subscribe(
      (queryParams: any) =>{
        this.pagina = queryParams['pagina'];
      }
    )
  }

}
