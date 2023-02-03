export interface FormInput {
  field_break: boolean
  field_name: string
  field_option: { text: string; value: number }[]
  field_placeholder: string
  field_postname: string
  field_title: string
  id: number
}

export interface FormData {
  first_name: string
  last_name: string
  email: string
  problemId: string
  message: string
}
