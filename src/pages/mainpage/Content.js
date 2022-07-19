import React from 'react'
import "./Content.css"
function Content() {
  return (
    <div>
      <h1 className='text-center mb-5 title-about'>Despre noi</h1>
    <div class="group mb-5 container-fluid">
    <div class="left">
        <p className='about-text'>

        Înfiinţată in 1967, Facultatea de Automatică şi Calculatoare are ca misiune realizarea unui mediu de excelență pentru educație, cercetare şi inovare, factori cheie în dezvoltarea economiei bazate pe cunoaştere. In particular, misiunea Facultăţii de Automatică și Calculatoare este aceea de a facilita cercetarea ştiinţifică de nivel înalt, de a împărtăşi cunoaştere prin educație în domeniul Calculatoare şi Tehnologia Informaţiei şi în domeniul Ingineria Sistemelor, şi de a oferi studenţilor şi cadrelor didactice din facultate un mediu profesional și social stimulativ, de elită.

Facultatea de Automatică și Calculatoare pregăteşte ingineri specialiști în domeniile Ingineria Sistemelor și Calculatoare și Tehnologia Informaţiei pe baza unor programe de studii moderne, în care aspectele teoretice sunt îmbinate cu excelenţa aplicativă. Studenţii facultăţii beneficiază de un mediu de învăţământ competitiv care stimulează creativitatea, iniţiativa ştiinţifică şi tehnică, dezvoltarea personală şi implicarea activă a viitorilor specialişti în construirea unei societăţi moderne.
Facultatea oferă programe de studiu compatibile cu sistemul european de credite transferabile, după cum urmează.

        </p>
    </div>
    <div class="right">
        <img className='about-image image-fluid' src="https://images.pexels.com/photos/207691/pexels-photo-207691.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
    </div>
</div>
    

      <div className='bg-dark container-fluid'>
      <table height="60px">
        <td width="60px" valign="top" align="center" >
         <div class="PageLine2V">&nbsp;</div>
        </td>
</table>
      </div>

      </div>
    

  )
}

export default Content