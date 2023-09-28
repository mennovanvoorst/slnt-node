class Model<TModel extends Record<string, any>> {
  constructor(values?: TModel) {
    if (values) this.initValues(values);
  }

  private initValues(values: TModel) {
    Object.keys(values).forEach((value) => {
      (this as any)[value] = values[value];
    });
  }
}

export default Model;
