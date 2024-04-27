import bootstrap from '../svg/skills/bootstrap.svg';
import c from '../svg/skills/c.svg';
import canva from '../svg/skills/canva.svg';
import cplusplus from '../svg/skills/cplusplus.svg';
import csharp from '../svg/skills/csharp.svg';
import css from '../svg/skills/css.svg';
import figma from '../svg/skills/figma.svg';
import git from '../svg/skills/git.svg';
import html from '../svg/skills/html.svg';
import java from '../svg/skills/java.svg';
import javascript from '../svg/skills/javascript.svg';
import mysql from '../svg/skills/mysql.svg';
import photoshop from '../svg/skills/photoshop.svg';
import python from '../svg/skills/python.svg';
import react from '../svg/skills/react.svg';
import tailwind from '../svg/skills/tailwind.svg';
import vue from '../svg/skills/vue.svg';

export const skillsImage = (skill) => {
    const skillID = skill.toLowerCase()
    switch (skillID){
        case 'html':
            return html
        case 'photoshop':
            return photoshop
        case 'css':
            return css
        case 'javascript':
            return javascript
        case 'react':
            return react
        case 'vue':
            return vue
        case 'bootstrap':
            return bootstrap
        case 'mysql':
            return mysql
        case 'tailwind':
            return tailwind
        case 'c':
            return c
        case 'c++':
            return cplusplus
        case 'c#':
            return csharp
        case 'java':
            return java
        case 'python':
            return python
        case 'git':
            return git
        case 'figma':
            return figma
        case 'canva':
            return canva
        default:
            break
    }
}