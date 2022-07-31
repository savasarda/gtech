export interface WeatherData {
    result: [Result, Result2, string]
  }
  
  export interface Result {
    date: string
    day: string
    icon: string
    description: string
    status: string
    degree: number
    min: string
    max: string
    night: string
    humidity: string
  }
  
  export interface Result2 {
    date: string
    day: string
    icon: string
    description: string
    status: string
    degree: string
    min: string
    max: string
    night: string
    humidity: string
  }