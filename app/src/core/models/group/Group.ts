/* eslint-disable no-unused-vars */
export class Group {
  constructor(
    readonly id: number,
    readonly createdBy: number,
    readonly updatedBy: number,
    readonly title: string,
    readonly metaTitle: string,
    readonly slug: string,
    readonly summer: string,
    readonly status: number,
    readonly createdAt: Date,
    readonly updatedAt: Date,
    readonly profile: string,
    readonly content: string,
  ) {}
}
