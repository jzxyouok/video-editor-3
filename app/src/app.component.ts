import {Component} from '@angular/core';

@Component({
  selector: 'video-editor',
  template: `<header></header>
             <section>
                 <div class="v-ct-top">
                    <player></player>
                    <panel></panel>
                 </div>
                 <div class="v-ct-bottom">
                    <div class="v-ct-track">
                        <div class="v-track-icon"></div>
                    </div>
                    <div class="v-ct-track">
                        <div class="v-track-icon"></div>
                    </div>
                 </div>
             </section>
             <footer></footer>`
})
export class AppComponent {}