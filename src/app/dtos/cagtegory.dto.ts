import {
  IsEnum,
  IsNotEmpty,
  IsUrl,
  Length,
  validateOrReject,
} from 'class-validator';
import { AccessType, Category } from '../models/category.model';
import { apiUrl } from '../api';

export interface ICreateCategoryDto extends Omit<Category, 'id'> {}

export class CreateCategoryDto implements ICreateCategoryDto {
  @IsNotEmpty()
  @Length(4, 100)
  name!: string;

  @IsUrl()
  @IsNotEmpty()
  image!: string;

  @IsEnum(AccessType)
  access?: AccessType | undefined;
}

(async () => {
  try {
    const dto = new CreateCategoryDto();
    dto.name = 'Category 1';
    dto.image = apiUrl;
    dto.access = AccessType.PRIVATE;
    await validateOrReject(dto);
  } catch (error) {
    console.log(error);
  }
})();
