/**
  * Copyright 2023 Adligo Inc / Scott Morgan
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *     http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  */

export interface I_Classifiable {
  /**
   * Id this objects class (classification)
   */
  getClass(): string;
}

export interface I_Equatable {
  /**
   * Compare two object to see if they are equals
   * @param obj 
   */
  equals(obj: any): boolean;
}

export interface I_Hashable {
  /**
   * return a hashCode for this object, not generally needed in Javascript
   * for Dictinarys or Maps, but I thought I would include it for downstream purposes.
   */
  hashCode(): number;
}