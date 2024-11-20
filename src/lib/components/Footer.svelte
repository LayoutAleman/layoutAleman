<script>
    import {generales} from '../stores'

</script>
<div data-aos="fade-in" >
<div class="footer">
    <div class="footer-row row mx-0 px-5 align-items-center py-2 justify-content-center">
        
        <!--<div class="col-3 ">
            <img class="footer_img" src="{logo_blanco}" alt="">
        </div>
        -->
        <div class="col-sm-3 col-10 pt-3">
            <p class="contactanos-text text-center"><a href="/contacto" class="link-71">CONTÁCTANOS</a> </p>
            <ul class="social-icons">
                <li><a href="{$generales.contacto.facebook}" target="_blank"><i class="bi bi-facebook"></i></a></li>
                <li><a href="{$generales.contacto.instagram}" target="_blank"><i class="bi bi-instagram"></i></a></li>
                <li><a href="https://api.whatsapp.com/send?phone={$generales.contacto.whatsapp}" target="_blank"><i class="bi bi-whatsapp"></i></a></li>
            </ul>
        </div>
    </div>
</div>
<div class="bg-adcent footer-bottom text-center">
    @Layout Aleman
</div>
</div>

<style>
    .footer{width: 100%;  background-color: var(--primary-color);}
    .footer_img{max-height: 80px; width: auto;}
    .footer-bottom{font-size: 12px; margin: 0;background-color: rgb(62, 62, 62);color:  #fffff0bf;}
    .footer-row{height: 100%;}
    .social-icons{display: flex; list-style: none; justify-content: center; padding-left: 0;}
    .social-icons a{color: white; margin: 0 10px; font-size: 20px; }
    .contactanos-text a{color: white; letter-spacing: 2px; text-decoration: none;font-size: 15px; margin-bottom: 0;}
    
</style>