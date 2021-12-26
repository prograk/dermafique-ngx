interface IoutputData {
      oxygen_score:number,
      dark_circle_percentage:number,
      dark_spot_percentage:number,
      acne_percentage:number,
      uneven_skin_percentage:number,
      skin_dullness_percentage:number,
      face_wrinkle_percentage:number,
      crowsfeet_percentage:number,
      eye_wrinkle_percentage:number,
      face_firmness_percentage:number,
      Smoothness:number,
      hydration_score:number,
      skin_health_score:number
}

interface IoutputImages {
    acne_image:string,
    face_wrinkle_image:string,
    eye_wrinkle_image:string,
    crowsfeet_image:string,
    skin_dullness_image:string,
    uneven_skin_image:string,
    dark_spot_image:string,
    dark_circle_image:string,
    strength_image:string
}

export interface IGetResult {
    id: string,
    outputData: IoutputData[],
    outputImages: IoutputImages[]
}