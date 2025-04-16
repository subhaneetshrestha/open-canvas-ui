import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'clp-loading',
  templateUrl: './loading.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoadingComponent {
  readonly loadingText = input('Loading, please wait...');
}
