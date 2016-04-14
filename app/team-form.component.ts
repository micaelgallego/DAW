import {Component}  from 'angular2/core';
import {RouteParams, Router} from 'angular2/router';
import {Team, TeamService}   from './team.service';

@Component({
  template: `
  <div id="principal" class="container">
            <ol id="breadcrumb">
                <li>
                    <a href="Pruebas.html"><img class="img-rounded" src="http://4.bp.blogspot.com/_A0w2msagD40/SSrCvRwW5cI/AAAAAAAACb8/guoEtikOYSc/s1600/imagen_flecha_derecha%5B1%5D.gif">Home</a>
                </li>
                <li id="raya">/</li>
                <li><a id="active">New Team</a>
                </li>
            </ol>
            <div id="cuerpo">
                <div class="row">
                    <div class="col-md-2 hidden-sm hidden-xs">
                        <div id="galeria1">
                        </div>
                    </div>
                    <div class="col-md-8 col-sm-12 col-xs-12">
                        <div class="panel panel-warning">
                            <div class="panel-heading">
                                <h3 class="panel-title">Form to add a new team</h3>
                            </div>
                            <div class="panel-body">
                                <form name="formteam" action="#" method="post">
                                    <fieldset>
                                        <legend>Sheet football team:</legend>
                                        <div class="col-xs-6">
                                            <p>
                                                <b>Full name*:</b>
                                                <input [(ngModel)]="team.fullname" type='text' class="form-control" name='fullname' placeholder="Full Name" id="fullname" required/>
                                            </p>
                                        </div>

                                        <div class="col-xs-6">
                                            <p>
                                                <b>Stadium*:</b>
                                                <input [(ngModel)]="team.abstract" type='text' class="form-control" name='stadium' placeholder="Stadium" id="stadium" required/>
                                            </p>
                                        </div>

                                        <div class="col-xs-6">
                                            <p>
                                                <b>Description*:</b>
                                                <textarea [(ngModel)]="team.description" class="form-control" rows="5" name="description" placeholder="Add a litte description about the football team" id="description"></textarea>
                                            </p>
                                        </div>

                                        <div class="col-xs-6">
                                            <p>
                                                <b>History*:</b>
                                                <textarea class="form-control" rows="5" name="history" placeholder="Add a little description about the history of the team" id="history"></textarea>
                                            </p>
                                        </div>

                                        <div class="col-xs-6">
                                            <p>
                                                <b>Coach*:</b>
                                                <input type='text' class="form-control" name='coach' placeholder="Coach" id="coach" required/>
                                            </p>
                                        </div>

                                        <div class="col-xs-6">
                                            <p>
                                                <b>Delegate*:</b>
                                                <input type='text' class="form-control" name='delegate' placeholder="Delegate" id="delegate" required/>
                                            </p>
                                        </div>

                                        <div class="col-xs-6">
                                            <p>
                                                <b>Second Delegate*:</b>
                                                <input type='text' class="form-control" name='secdelegate' placeholder="Second Delegate" id="secdelegate" required/>
                                            </p>
                                        </div>

                                        <div class="col-xs-6">
                                            <p>
                                                <b>Physiotherapist*:</b>
                                                <input type='text' class="form-control" name='physiotherapist' placeholder="Physiotherapist" id="physiotherapist" required/>
                                            </p>
                                        </div>

                                        <div class="col-xs-6">
                                            <p>
                                                <b>Goalkeeper Coach*:</b>
                                                <input type='text' class="form-control" name='goalkeepercoach' placeholder="Goalkeeper Coach" id="goalkeepercoach" required/>
                                            </p>
                                        </div>
                                    </fieldset>
                                    <fieldset>
                                        <legend>Image gallery:</legend>

                                        <div class="col-xs-6">
                                            <p>
                                            <b>Football Shield*:</b>
                                            <input type='text' class="form-control" name='imgequipo' placeholder="Imagen Equipo" id="imgequipo" [(ngModel)]="team.imgequipo" required/>
                                            </p>
                                        </div>

                                        <div class="col-xs-6">
                                            <form method="post" enctype="multipart/form-data">
                                                <b>Team Image:</b>
                                                <input type=file size=60 name="file2">
                                            </form>
                                            <br>
                                        </div>

                                        <div class="col-xs-6">
                                            <form method="post" enctype="multipart/form-data">
                                                <b>First Equipement:</b>
                                                <input type=file size=60 name="file3">
                                            </form>
                                            <br>
                                        </div>

                                        <div class="col-xs-6">
                                            <form method="post" enctype="multipart/form-data">
                                                <b>Second Equipement:</b>
                                                <input type=file size=60 name="file4">
                                            </form>
                                            <br>
                                        </div>

                                    </fieldset>

                                    <div class="col-xs-12">
                                        <p>Items marked with * will be required by the form.</p>
                                    </div>

                                    <div class="col-xs-6">
                                        <input (click)="save()" type='submit' name='enviar' value='Submit' />
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-2 hidden-xs hidden-sm">
                        <div id="galeria2">
                        </div>
                    </div>
                </div>
            </div>
  `,
  styleUrls: ["app/css/formEquipo.component.css"],
})
export class TeamFormComponent {

  newTeam: boolean;
  team: Team;

  constructor(
    private _router:Router,
    routeParams:RouteParams,
    private service: TeamService){

      let id = routeParams.get('id');
      if(id){
        service.getTeam(id).subscribe(
          team => this.team = team,
          error => console.error(error)
        );
        this.newTeam = false;
      } else {
        this.team = new Team(undefined,'','');
        this.newTeam = true;
      }
  }

  cancel() {
    window.history.back();
  }

  save() {
    this.service.saveTeam(this.team);
    window.history.back();
  }
}
