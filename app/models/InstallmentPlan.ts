import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class InstallmentPlan extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare cliente_id: number

  @column()
  declare installment_number: number

  @column()
  declare installments: number

  @column()
  declare total_value: number

  @column()
  declare final_date: DateTime
  
  @column({ consume: (value) => Boolean(value) })
  declare status: boolean


  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}