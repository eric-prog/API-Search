export interface StackOverflowResponse {
    type: number
    items: Item[]
    has_more: boolean
    quota_max: number
    quota_remaining: number
}

interface Item {
    tags: string[]
    owner: Owner
    is_answered: boolean
    view_count: number
    answer_count: number
    score: number
    last_activity_date: number
    creation_date: number
    question_id: number
    content_license?: string
    link: string
    title: string
    last_edit_date?: number
    accepted_answer_id?: number
    closed_date?: number
    closed_reason?: string
}
  
interface Owner {
    account_id: number
    reputation: number
    user_id: number
    user_type: string
    accept_rate?: number
    profile_image: string
    display_name: string
    link: string
}
