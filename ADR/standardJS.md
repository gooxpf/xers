## Naming Conventions and Code Styles

1. Use PascalCase for type names and use word 'Type' at the end of the name. <br>

  ```
    export type AvatarsPropsType = {
      className?: string,
      pageType?: PageTypes,
      avatarPath: string,
    };
  ```

2. Use PascalCase for enum values and use word 'Types' at the end of the name.

  ```
    export enum InputReducerActionTypes {
    Update = 'Update',
    }
  ```

3. Use PascalCase for interfaces and use word 'Interface' at the end of the name.

  ```
    interface StoryWrapperPropsInterface {
    children: ReactElement,
}
  ```

4. Use camelCase for arrays and use word 'List' at the end of the name.

  ```
    export const employeeLeaveTypesList: DefaultOptionInterface[] = [
    {
      id: EmployeeLeaveTypes.Vacation,
     name: EmployeeLeaveTypes.Vacation,
    },
  ];
  ```

5. Use camelCase for function names.

  ``` 
   const handleSetImage = (data: FormData) => {
    if (setFile) {
      setFile(data);
    }
  };

  ```

6. Use PascalCase for component names.

  ```
const EmptyList: React.FC<EmptyListPropsType> = (props: EmptyListPropsType) => {
  const { redirectPath } = RedirectHook();
 
  return (
    </div>  
  );
};
  ```

7. Use export default from index file if there is one component in the directory, else export as const again from index
   file.
8. Create reusable components with general namings, no specific page words.

  ```
  InputText not EmployeeInputText
  ```

9. For component namings use type first then name of the element you are creating.

  ```
  CancelButton, EmployeeCharts not ButtonCancel
  ```

10. Do not use "_" as a prefix for private properties.
11. Use whole words in names when it possible.
12. Write js styles only in a component folder and export component from index.ts.
13. Forget about any, never, unknown and another types like that!!!

