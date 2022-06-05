import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appHideForRoles]'
})
export class HideForRolesDirective {

  constructor(
    private viewContainerRef: ViewContainerRef, private templateRef: TemplateRef<any>
  ) { }

  @Input() set (hideForRoles: Array<string>){
    //show page without hidden items and if user role is admin show hidden items aswell
    const hideFor = hideForRoles || [];
    if(hideFor.length > 0){
          this.roleChecker(hideFor);
    }else{
      this.viewContainerRef.createEmbeddedView(this.templateRef);

    }
  }

  roleChecker(hideFor:Array<string>){
    //current user role from local storage or jwt - THIS NEEDS TO CHANGE!
    const userRoles: Array<string> = ['admin'];

    //if there is no role
    if(userRoles.length === 0){
      //remove element that is being checked for roles
      this.viewContainerRef.clear()

    }else {
      const index = userRoles.findIndex(role => hideFor.indexOf(role) !== -1);
      return index < 0 ? this.viewContainerRef.createEmbeddedView(this.templateRef) : this.viewContainerRef.clear();
    //if there is rolematch then user user is allowed to see the element,
    //otherwise user is not allowed to see the element ant element is cleared from the view
    }
  }

}
