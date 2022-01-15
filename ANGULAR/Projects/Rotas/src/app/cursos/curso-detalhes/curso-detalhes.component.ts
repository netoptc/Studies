import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CursosService } from '../cursos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-curso-detalhes',
  templateUrl: './curso-detalhes.component.html',
  styleUrls: ['./curso-detalhes.component.css']
})
export class CursoDetalhesComponent implements OnInit {

  idcurso: number = 0;
  curso: any;

  constructor(
    private _route: ActivatedRoute, 
    private _cursosService: CursosService,
    private _router: Router
    ) { 
    this.idcurso = this._route.snapshot.params['id']

  }

  ngOnInit(): void {
    /* Se inscrevendo em um evnto para escutar mudanção nos parametros da URL*/
    this._route.params.subscribe((params: any) => {
        this.curso = this._cursosService.getCurso(params['id']);
        /*Redireciona para Home se não encontrar o id do curso*/
        if(this.curso == null){
          this._router.navigate(['/cursos/curso-nao-encontrado']);    
        }else{
          this.idcurso = this.curso.id;  
        }
      }
    )
    
    
  }

}
