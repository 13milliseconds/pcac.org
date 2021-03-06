<article @php post_class() @endphp>
  <header>
    <div class="container">
      <div class="row">
        <div class="col-md-6 text">
          @php
            if(in_category(112)):
              $council = get_the_terms($post, 'council')[0]->slug;
              if( $council == 'pcac'):
                $link = '/about/meeting-minutes';
              else:
                $link = '/' . $council . '/meeting-minutes';
              endif;
            else:
              $link = '/commentary';
              //$link = '/commentary/?council=' . get_the_terms($post, 'council')[0]->slug;
            endif;
          @endphp
          <a href="{{ $link }}"><i class="fal fa-arrow-left"></i> Back to All</a>
          <h1 class="entry-title">{!! get_the_title() !!}</h1>
          @include('partials/entry-meta')
        </div>
      </div>
    </div>
    <div class="thumbnail">
      {{ the_post_thumbnail('large') }}
    </div>
  </header>
  <div class="entry-content">
    <div class="container">
      @php the_content() @endphp
    </div>
  </div>
  <footer>
    {!! wp_link_pages(['echo' => 0, 'before' => '<nav class="page-nav"><p>' . __('Pages:', 'sage'), 'after' => '</p></nav>']) !!}
  </footer>
</article>
