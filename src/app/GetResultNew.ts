
export interface OutputData {
    dark_spot_percentage: number;
    uneven_skin_percentage: number;
    skin_dullness_percentage: number;
    face_wrinkle_percentage: number;
    face_firmness_percentage: number;
    Smoothness: number;
    hydration_score: number;
    skin_health_score: number;
    dark_spot_percentage_color_code: string;
    uneven_skin_percentage_color_code: string;
    skin_dullness_percentage_color_code: string;
    face_wrinkle_percentage_color_code: string;
    face_firmness_percentage_color_code: string;
    Smoothness_color_code: string;
    hydration_score_color_code: string;
}

export interface OutputImages {
    strength_image: string;
}

export interface PriorityProductInfo {
    skin_analysis_report: string;
    product_image: string;
    product_image_thumbnail: string;
    product_name: string;
    product_desc: string;
    product_link: string;
    concern_write_up_A: string;
    how_this_is_caused_image: string;
    how_this_is_caused_1: string;
    how_this_is_caused_2: string;
    how_this_is_caused_3: string;
    how_this_is_caused_4?: any;
    what_you_need_image: string;
    what_you_need_point_1: string;
    what_you_need_point_2: string;
    solution_recommends: string;
    solution_recommends_desc: string;
    solution_point_1_image: string;
    solution_point_1: string;
    solution_point_2_image: string;
    solution_point_2: string;
    solution_point_3_image: string;
    solution_point_3: string;
    solution_point_4_image: string;
    solution_point_4: string;
    solution_concluding_paragraph: string;
    expert_tip: string;
    expert_tip_desc: string;
    expert_tip_point_1_image: string;
    expert_tip_point_1: string;
    expert_tip_point_2_image: string;
    expert_tip_point_2: string;
    expert_tip_point_3_image: string;
    expert_tip_point_3: string;
    expert_tip_point_4_image: string;
    expert_tip_point_4: string;
    expert_tip_point_5_image: string;
    expert_tip_point_5: string;
    expert_tip_concluding_paragraph: string;
}

export interface TopPriority {
    priority_number: number;
    priority_name: string;
    priority_score: number;
    priority_color_code: string;
    priority_title: string;
    priority_prod_title: string;
    priority_product_info: PriorityProductInfo;
}

export interface Strength {
    strength_number: number;
    strength_name: string;
    strength_score: number;
    strength_title: string;
}

export interface SkinCareRoutine {
    routine_number: number;
    routine_prod_title: string;
}

export interface PriorityInfo {
    topPriorities: TopPriority[];
    strengths: Strength[];
    skinCareRoutines: SkinCareRoutine[];
}

export interface IGetResultNew {
    outputData: OutputData;
    outputImages: OutputImages;
    priorityInfo: PriorityInfo;
}



